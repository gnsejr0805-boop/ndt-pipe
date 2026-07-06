export type PipeStandard = 'B36.10' | 'B36.19'

export type PipeRecord = {
  standard: PipeStandard
  nps: string
  schedule: string
  odMm: number
  thicknessMm: number
  thicknessIn: number
  source: string
  revision: string
  verification: 'verified'
}

export const PIPE_RECORDS: readonly PipeRecord[] = [
  {
    standard: 'B36.10',
    nps: '1',
    schedule: 'STD',
    odMm: 33.4,
    thicknessMm: 3.38,
    thicknessIn: 0.133,
    source: 'Pipe Schedules 기준표 · NPS 1 · STD',
    revision: '데이터 v0.1',
    verification: 'verified',
  },
  {
    standard: 'B36.19',
    nps: '2½',
    schedule: 'SCH 5S',
    odMm: 73.0,
    thicknessMm: 2.11,
    thicknessIn: 0.083,
    source: 'Pipe Schedules 기준표 · NPS 2½ · SCH 5S',
    revision: '데이터 v0.1',
    verification: 'verified',
  },
  {
    standard: 'B36.19',
    nps: '2½',
    schedule: 'SCH 40S',
    odMm: 73.0,
    thicknessMm: 5.16,
    thicknessIn: 0.203,
    source: 'Pipe Schedules 기준표 · NPS 2½ · SCH 40S',
    revision: '데이터 v0.1',
    verification: 'verified',
  },
]

export function findVerifiedPipeRecord(
  standard: PipeStandard,
  nps: string,
  schedule: string,
): PipeRecord | undefined {
  return PIPE_RECORDS.find(
    (record) =>
      record.standard === standard &&
      record.nps === nps &&
      record.schedule === schedule &&
      record.verification === 'verified',
  )
}