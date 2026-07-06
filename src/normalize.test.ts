import { describe, expect, it } from 'vitest'
import { normalizeNps, normalizeSchedule } from './normalize'

describe('NPS 입력 정규화', () => {
  it('2.5를 2½로 바꾼다', () => {
    expect(normalizeNps('2.5')).toBe('2½')
  })

  it('2½를 2½로 인식한다', () => {
    expect(normalizeNps('2½')).toBe('2½')
  })

  it('2 1/2를 2½로 바꾼다', () => {
    expect(normalizeNps('2 1/2')).toBe('2½')
  })

  it('2-1/2를 2½로 바꾼다', () => {
    expect(normalizeNps('2-1/2')).toBe('2½')
  })

  it('NPS 2.5를 2½로 바꾼다', () => {
    expect(normalizeNps('NPS 2.5')).toBe('2½')
  })

  it('존재하지 않는 NPS는 빈값으로 처리한다', () => {
    expect(normalizeNps('2.7')).toBe('')
  })
})

describe('Schedule 입력 정규화', () => {
  it('SCH40S를 SCH 40S로 바꾼다', () => {
    expect(normalizeSchedule('SCH40S')).toBe('SCH 40S')
  })

  it('S40을 SCH 40S로 바꾼다', () => {
    expect(normalizeSchedule('S40')).toBe('SCH 40S')
  })

  it('40S를 SCH 40S로 바꾼다', () => {
    expect(normalizeSchedule('40S')).toBe('SCH 40S')
  })

  it('sch 40 s를 SCH 40S로 바꾼다', () => {
    expect(normalizeSchedule('sch 40 s')).toBe('SCH 40S')
  })

  it('SCH40은 SCH 40으로 따로 구분한다', () => {
    expect(normalizeSchedule('SCH40')).toBe('SCH 40')
  })

  it('STD를 그대로 인식한다', () => {
    expect(normalizeSchedule('std')).toBe('STD')
  })

  it('XS를 그대로 인식한다', () => {
    expect(normalizeSchedule('xs')).toBe('XS')
  })

  it('XXS를 그대로 인식한다', () => {
    expect(normalizeSchedule('xxs')).toBe('XXS')
  })

  it('이상한 입력은 빈값으로 처리한다', () => {
    expect(normalizeSchedule('SCH ABC')).toBe('')
  })
})