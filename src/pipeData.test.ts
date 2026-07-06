import { describe, expect, it } from 'vitest'
import { findVerifiedPipeRecord, PIPE_RECORDS } from './pipeData'

describe('파이프 데이터 안전 검사', () => {
  it('중복된 표준 / NPS / Schedule 조합이 없어야 한다', () => {
    const keys = PIPE_RECORDS.map(
      (record) => `${record.standard}|${record.nps}|${record.schedule}`,
    )

    expect(new Set(keys).size).toBe(keys.length)
  })

  it('모든 등록값은 양수여야 한다', () => {
    for (const record of PIPE_RECORDS) {
      expect(record.odMm).toBeGreaterThan(0)
      expect(record.thicknessMm).toBeGreaterThan(0)
      expect(record.thicknessIn).toBeGreaterThan(0)
      expect(record.source.length).toBeGreaterThan(0)
      expect(record.revision.length).toBeGreaterThan(0)
      expect(record.verification).toBe('verified')
    }
  })

  it('B36.10 / 1 / STD는 t 3.38 mm다', () => {
    const result = findVerifiedPipeRecord('B36.10', '1', 'STD')

    expect(result?.thicknessMm).toBe(3.38)
    expect(result?.thicknessIn).toBe(0.133)
  })

  it('B36.19 / 2½ / SCH 5S는 t 2.11 mm다', () => {
    const result = findVerifiedPipeRecord('B36.19', '2½', 'SCH 5S')

    expect(result?.thicknessMm).toBe(2.11)
    expect(result?.thicknessIn).toBe(0.083)
  })

  it('B36.19 / 2½ / SCH 40S는 t 5.16 mm다', () => {
    const result = findVerifiedPipeRecord('B36.19', '2½', 'SCH 40S')

    expect(result?.thicknessMm).toBe(5.16)
    expect(result?.thicknessIn).toBe(0.203)
  })
})