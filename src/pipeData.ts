export type PipeTable = 'TABLE_1' | 'TABLE_2'

export type PipeRecord = {
  table: PipeTable
  nps: string
  schedule: string
  odMm: number
  thicknessMm: number
  thicknessIn: number
  sourceLabel: string
  sourceCell: string
  review: 'source-checked'
}

export const PIPE_RECORDS: readonly PipeRecord[] = [
  {
    table: 'TABLE_1',
    nps: '1',
    schedule: 'SCH 40',
    odMm: 33.4,
    thicknessMm: 3.38,
    thicknessIn: 0.133,
    sourceLabel: '사용자 제공 PIPE SCHEDULES 표 1',
    sourceCell: 'NPS 1 / SCH 40',
    review: 'source-checked',
  },
  {
    table: 'TABLE_2',
    nps: '1',
    schedule: 'STD',
    odMm: 33.4,
    thicknessMm: 3.38,
    thicknessIn: 0.133,
    sourceLabel: '사용자 제공 PIPE SCHEDULES 표 2',
    sourceCell: 'NPS 1 / STD',
    review: 'source-checked',
  },
  {
    table: 'TABLE_2',
    nps: '2½',
    schedule: 'SCH 5S',
    odMm: 73.0,
    thicknessMm: 2.11,
    thicknessIn: 0.083,
    sourceLabel: '사용자 제공 PIPE SCHEDULES 표 2',
    sourceCell: 'NPS 2½ / SCH 5S',
    review: 'source-checked',
  },
  {
    table: 'TABLE_2',
    nps: '2½',
    schedule: 'SCH 40S',
    odMm: 73.0,
    thicknessMm: 5.16,
    thicknessIn: 0.203,
    sourceLabel: '사용자 제공 PIPE SCHEDULES 표 2',
    sourceCell: 'NPS 2½ / SCH 40S',
    review: 'source-checked',
  },
]

export function findSourceCheckedPipeRecord(
  table: PipeTable,
  nps: string,
  schedule: string,
): PipeRecord | undefined {
  return PIPE_RECORDS.find(
    (record) =>
      record.table === table &&
      record.nps === nps &&
      record.schedule === schedule &&
      record.review === 'source-checked',
  )
}