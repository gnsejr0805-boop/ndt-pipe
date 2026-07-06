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

  it('현재 등록된 데이터 수는 377개다', () => {
    expect(PIPE_RECORDS).toHaveLength(377)
  })

  it('모든 등록 수치는 양수여야 한다', () => {
    for (const record of PIPE_RECORDS) {
      expect(record.odMm).toBeGreaterThan(0)
      expect(record.thicknessMm).toBeGreaterThan(0)
      expect(record.thicknessIn).toBeGreaterThan(0)
      expect(record.review).toBe('source-checked')
    }
  })

  it('저구경 기준값이 유지된다', () => {
    expectThickness('TABLE_1', '1', 'SCH 40', 3.38, 0.133)
    expectThickness('TABLE_2', '2½', 'SCH 5S', 2.11, 0.083)
    expectThickness('TABLE_2', '2½', 'SCH 40S', 5.16, 0.203)
  })

  it('NPS 18 ~ 26 기준값이 유지된다', () => {
    expectThickness('TABLE_1', '18', 'SCH 160', 45.24, 1.781)
    expectThickness('TABLE_2', '20', 'SCH 10S', 5.54, 0.218)
    expectThickness('TABLE_1', '24', 'SCH 140', 52.37, 2.062)
    expectThickness('TABLE_2', '26', 'SCH 10', 7.92, 0.312)
  })

  it('NPS 28 ~ 36 기준값이 유지된다', () => {
    expectThickness('TABLE_1', '32', 'SCH 40', 17.48, 0.688)
    expectThickness('TABLE_2', '30', 'SCH 80S', 12.7, 0.5)
    expectThickness('TABLE_2', '36', 'SCH 30', 15.88, 0.625)
  })

  it('NPS 38 ~ 48의 표 1 XS 값은 모두 12.70 mm다', () => {
    for (const nps of ['38', '40', '42', '44', '46', '48']) {
      expectThickness('TABLE_1', nps, 'XS', 12.7, 0.5)
    }
  })

  it('NPS 38 ~ 48의 표 2 STD 값은 모두 9.53 mm다', () => {
    for (const nps of ['38', '40', '42', '44', '46', '48']) {
      expectThickness('TABLE_2', nps, 'STD', 9.53, 0.375)
    }
  })
})
