import { describe, expect, it } from 'vitest'
import {
  findSourceCheckedPipeRecord,
  PIPE_RECORDS,
} from './pipeData'

describe('파이프 표 데이터 검사', () => {
  it('표 / NPS / Schedule 조합은 중복되면 안 된다', () => {
    const keys = PIPE_RECORDS.map(
      (record) => `${record.table}|${record.nps}|${record.schedule}`,
    )

    expect(new Set(keys).size).toBe(keys.length)
  })

  it('모든 수치는 0보다 커야 한다', () => {
    for (const record of PIPE_RECORDS) {
      expect(record.odMm).toBeGreaterThan(0)
      expect(record.thicknessMm).toBeGreaterThan(0)
      expect(record.thicknessIn).toBeGreaterThan(0)
      expect(record.review).toBe('source-checked')
    }
  })

  it('표 1 / NPS 1 / SCH 40은 3.38 mm다', () => {
    const result = findSourceCheckedPipeRecord('TABLE_1', '1', 'SCH 40')

    expect(result?.thicknessMm).toBe(3.38)
  })

  it('표 2 / NPS 1 / STD는 3.38 mm다', () => {
    const result = findSourceCheckedPipeRecord('TABLE_2', '1', 'STD')

    expect(result?.thicknessMm).toBe(3.38)
  })

  it('표 2 / NPS 2½ / SCH 5S는 2.11 mm다', () => {
    const result = findSourceCheckedPipeRecord('TABLE_2', '2½', 'SCH 5S')

    expect(result?.thicknessMm).toBe(2.11)
  })

  it('표 2 / NPS 2½ / SCH 40S는 5.16 mm다', () => {
    const result = findSourceCheckedPipeRecord('TABLE_2', '2½', 'SCH 40S')

    expect(result?.thicknessMm).toBe(5.16)
  })
})