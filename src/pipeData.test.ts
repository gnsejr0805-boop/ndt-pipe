import { describe, expect, it } from 'vitest'
import {
  findSourceCheckedPipeRecord,
  PIPE_RECORDS,
} from './pipeData'

function expectThickness(
  table: 'TABLE_1' | 'TABLE_2',
  nps: string,
  schedule: string,
  thicknessMm: number,
  thicknessIn: number,
) {
  const result = findSourceCheckedPipeRecord(table, nps, schedule)

  expect(result?.thicknessMm).toBe(thicknessMm)
  expect(result?.thicknessIn).toBe(thicknessIn)
}

describe('파이프 표 데이터 검사', () => {
  it('중복된 표 / NPS / Schedule 조합이 없어야 한다', () => {
    const keys = PIPE_RECORDS.map(
      (record) => `${record.table}|${record.nps}|${record.schedule}`,
    )

    expect(new Set(keys).size).toBe(keys.length)
  })

  it('현재 등록된 데이터 수는 173개다', () => {
    expect(PIPE_RECORDS).toHaveLength(173)
  })

  it('모든 등록 수치는 양수여야 한다', () => {
    for (const record of PIPE_RECORDS) {
      expect(record.odMm).toBeGreaterThan(0)
      expect(record.thicknessMm).toBeGreaterThan(0)
      expect(record.thicknessIn).toBeGreaterThan(0)
      expect(record.review).toBe('source-checked')
    }
  })

  it('기존 저구경 기준값이 유지된다', () => {
    expectThickness('TABLE_1', '1', 'SCH 40', 3.38, 0.133)
    expectThickness('TABLE_2', '2½', 'SCH 5S', 2.11, 0.083)
    expectThickness('TABLE_2', '2½', 'SCH 40S', 5.16, 0.203)
  })

  it('NPS 3 기준값이 유지된다', () => {
    expectThickness('TABLE_1', '3', 'SCH 40', 5.49, 0.216)
    expectThickness('TABLE_1', '3', 'SCH 160', 11.13, 0.438)
    expectThickness('TABLE_2', '3', 'SCH 40S', 5.49, 0.216)
  })

  it('NPS 3½ 기준값이 유지된다', () => {
    expectThickness('TABLE_1', '3½', 'SCH 80', 8.08, 0.318)
    expectThickness('TABLE_2', '3½', 'SCH 40S', 5.74, 0.226)
  })

  it('NPS 4 기준값이 유지된다', () => {
    expectThickness('TABLE_1', '4', 'SCH 120', 11.13, 0.438)
    expectThickness('TABLE_1', '4', 'XXS', 17.12, 0.674)
    expectThickness('TABLE_2', '4', 'STD', 6.02, 0.237)
  })

  it('NPS 5 기준값이 유지된다', () => {
    expectThickness('TABLE_1', '5', 'SCH 160', 15.88, 0.625)
    expectThickness('TABLE_1', '5', 'XXS', 19.05, 0.75)
    expectThickness('TABLE_2', '5', 'SCH 10S', 3.4, 0.134)
  })

  it('NPS 6 기준값이 유지된다', () => {
    expectThickness('TABLE_1', '6', 'SCH 120', 14.27, 0.562)
    expectThickness('TABLE_1', '6', 'SCH 160', 18.26, 0.719)
    expectThickness('TABLE_2', '6', 'SCH 80S', 10.97, 0.432)
  })
})