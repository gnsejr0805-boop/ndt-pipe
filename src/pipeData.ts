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

export const PIPE_RECORDS: readonly PipeRecord[] = []

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