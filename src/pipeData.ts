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

type ThicknessPair = readonly [number, number]

type PipeRow = {
  nps: string
  odMm: number
  schedules: Readonly<Record<string, ThicknessPair>>
}

const TABLE_1_ROWS: readonly PipeRow[] = [
  {
    nps: '1/4',
    odMm: 13.7,
    schedules: {
      'SCH 40': [2.24, 0.088],
      XS: [3.02, 0.119],
      'SCH 80': [3.02, 0.119],
    },
  },
  {
    nps: '3/8',
    odMm: 17.1,
    schedules: {
      'SCH 40': [2.31, 0.091],
      XS: [3.2, 0.126],
      'SCH 80': [3.2, 0.126],
    },
  },
  {
    nps: '1/2',
    odMm: 21.3,
    schedules: {
      'SCH 40': [2.77, 0.109],
      XS: [3.73, 0.147],
      'SCH 80': [3.73, 0.147],
      'SCH 160': [4.78, 0.188],
      XXS: [7.47, 0.294],
    },
  },
  {
    nps: '3/4',
    odMm: 26.7,
    schedules: {
      'SCH 40': [2.87, 0.113],
      XS: [3.91, 0.154],
      'SCH 80': [3.91, 0.154],
      'SCH 160': [5.56, 0.219],
      XXS: [7.82, 0.308],
    },
  },
  {
    nps: '1',
    odMm: 33.4,
    schedules: {
      'SCH 40': [3.38, 0.133],
      XS: [4.55, 0.179],
      'SCH 80': [4.55, 0.179],
      'SCH 160': [6.35, 0.25],
      XXS: [9.09, 0.358],
    },
  },
  {
    nps: '1¼',
    odMm: 42.2,
    schedules: {
      'SCH 40': [3.56, 0.14],
      XS: [4.85, 0.191],
      'SCH 80': [4.85, 0.191],
      'SCH 160': [6.35, 0.25],
      XXS: [9.7, 0.382],
    },
  },
  {
    nps: '1½',
    odMm: 48.3,
    schedules: {
      'SCH 40': [3.68, 0.145],
      XS: [5.08, 0.2],
      'SCH 80': [5.08, 0.2],
      'SCH 160': [7.14, 0.281],
      XXS: [10.15, 0.4],
    },
  },
  {
    nps: '2',
    odMm: 60.3,
    schedules: {
      'SCH 40': [3.91, 0.154],
      XS: [5.54, 0.218],
      'SCH 80': [5.54, 0.218],
      'SCH 160': [8.74, 0.344],
      XXS: [11.07, 0.436],
    },
  },
  {
    nps: '2½',
    odMm: 73.0,
    schedules: {
      'SCH 40': [5.16, 0.203],
      XS: [7.01, 0.276],
      'SCH 80': [7.01, 0.276],
      'SCH 160': [9.53, 0.375],
      XXS: [14.02, 0.552],
    },
  },
  {
    nps: '3',
    odMm: 88.9,
    schedules: {
      'SCH 40': [5.49, 0.216],
      XS: [7.62, 0.3],
      'SCH 80': [7.62, 0.3],
      'SCH 160': [11.13, 0.438],
      XXS: [15.24, 0.6],
    },
  },
  {
    nps: '3½',
    odMm: 101.6,
    schedules: {
      'SCH 40': [5.74, 0.226],
      XS: [8.08, 0.318],
      'SCH 80': [8.08, 0.318],
    },
  },
  {
    nps: '4',
    odMm: 114.3,
    schedules: {
      'SCH 40': [6.02, 0.237],
      XS: [8.56, 0.337],
      'SCH 80': [8.56, 0.337],
      'SCH 120': [11.13, 0.438],
      'SCH 160': [13.49, 0.531],
      XXS: [17.12, 0.674],
    },
  },
  {
    nps: '5',
    odMm: 141.3,
    schedules: {
      'SCH 40': [6.55, 0.258],
      XS: [9.53, 0.375],
      'SCH 80': [9.53, 0.375],
      'SCH 120': [12.7, 0.5],
      'SCH 160': [15.88, 0.625],
      XXS: [19.05, 0.75],
    },
  },
  {
    nps: '6',
    odMm: 168.3,
    schedules: {
      'SCH 40': [7.11, 0.28],
      XS: [10.97, 0.432],
      'SCH 80': [10.97, 0.432],
      'SCH 120': [14.27, 0.562],
      'SCH 160': [18.26, 0.719],
      XXS: [21.95, 0.864],
    },
  },
]

const TABLE_2_ROWS: readonly PipeRow[] = [
  {
    nps: '1/4',
    odMm: 13.7,
    schedules: {
      'SCH 10S': [1.65, 0.065],
      'SCH 40S': [2.24, 0.088],
      'SCH 80S': [3.02, 0.119],
      'SCH 10': [1.65, 0.065],
      'SCH 30': [1.85, 0.073],
      STD: [2.24, 0.088],
    },
  },
  {
    nps: '3/8',
    odMm: 17.1,
    schedules: {
      'SCH 10S': [1.65, 0.065],
      'SCH 40S': [2.31, 0.091],
      'SCH 80S': [3.2, 0.126],
      'SCH 10': [1.65, 0.065],
      'SCH 30': [1.85, 0.073],
      STD: [2.31, 0.091],
    },
  },
  {
    nps: '1/2',
    odMm: 21.3,
    schedules: {
      'SCH 5S': [1.65, 0.065],
      'SCH 10S': [2.11, 0.083],
      'SCH 40S': [2.77, 0.109],
      'SCH 80S': [3.73, 0.147],
      'SCH 5': [1.65, 0.065],
      'SCH 10': [2.11, 0.083],
      'SCH 30': [2.41, 0.095],
      STD: [2.77, 0.109],
    },
  },
  {
    nps: '3/4',
    odMm: 26.7,
    schedules: {
      'SCH 5S': [1.65, 0.065],
      'SCH 10S': [2.11, 0.083],
      'SCH 40S': [2.87, 0.113],
      'SCH 80S': [3.91, 0.154],
      'SCH 5': [1.65, 0.065],
      'SCH 10': [2.11, 0.083],
      'SCH 30': [2.41, 0.095],
      STD: [2.87, 0.113],
    },
  },
  {
    nps: '1',
    odMm: 33.4,
    schedules: {
      'SCH 5S': [1.65, 0.065],
      'SCH 10S': [2.77, 0.109],
      'SCH 40S': [3.38, 0.133],
      'SCH 80S': [4.55, 0.179],
      'SCH 5': [1.65, 0.065],
      'SCH 10': [2.77, 0.109],
      'SCH 30': [2.9, 0.114],
      STD: [3.38, 0.133],
    },
  },
  {
    nps: '1¼',
    odMm: 42.2,
    schedules: {
      'SCH 5S': [1.65, 0.065],
      'SCH 10S': [2.77, 0.109],
      'SCH 40S': [3.56, 0.14],
      'SCH 80S': [4.85, 0.191],
      'SCH 5': [1.65, 0.065],
      'SCH 10': [2.77, 0.109],
      'SCH 30': [2.97, 0.117],
      STD: [3.56, 0.14],
    },
  },
  {
    nps: '1½',
    odMm: 48.3,
    schedules: {
      'SCH 5S': [1.65, 0.065],
      'SCH 10S': [2.77, 0.109],
      'SCH 40S': [3.68, 0.145],
      'SCH 80S': [5.08, 0.2],
      'SCH 5': [1.65, 0.065],
      'SCH 10': [2.77, 0.109],
      'SCH 30': [3.18, 0.125],
      STD: [3.68, 0.145],
    },
  },
  {
    nps: '2',
    odMm: 60.3,
    schedules: {
      'SCH 5S': [1.65, 0.065],
      'SCH 10S': [2.77, 0.109],
      'SCH 40S': [3.91, 0.154],
      'SCH 80S': [5.54, 0.218],
      'SCH 5': [1.65, 0.065],
      'SCH 10': [2.77, 0.109],
      'SCH 30': [3.18, 0.125],
      STD: [3.91, 0.154],
    },
  },
  {
    nps: '2½',
    odMm: 73.0,
    schedules: {
      'SCH 5S': [2.11, 0.083],
      'SCH 10S': [3.05, 0.12],
      'SCH 40S': [5.16, 0.203],
      'SCH 80S': [7.01, 0.276],
      'SCH 5': [2.11, 0.083],
      'SCH 10': [3.05, 0.12],
      'SCH 30': [4.78, 0.188],
      STD: [5.16, 0.203],
    },
  },
  {
    nps: '3',
    odMm: 88.9,
    schedules: {
      'SCH 5S': [2.11, 0.083],
      'SCH 10S': [3.05, 0.12],
      'SCH 40S': [5.49, 0.216],
      'SCH 80S': [7.62, 0.3],
      'SCH 5': [2.11, 0.083],
      'SCH 10': [3.05, 0.12],
      'SCH 30': [4.78, 0.188],
      STD: [5.49, 0.216],
    },
  },
  {
    nps: '3½',
    odMm: 101.6,
    schedules: {
      'SCH 5S': [2.11, 0.083],
      'SCH 10S': [3.05, 0.12],
      'SCH 40S': [5.74, 0.226],
      'SCH 80S': [8.08, 0.318],
      'SCH 5': [2.11, 0.083],
      'SCH 10': [3.05, 0.12],
      'SCH 30': [4.78, 0.188],
      STD: [5.74, 0.226],
    },
  },
  {
    nps: '4',
    odMm: 114.3,
    schedules: {
      'SCH 5S': [2.11, 0.083],
      'SCH 10S': [3.05, 0.12],
      'SCH 40S': [6.02, 0.237],
      'SCH 80S': [8.56, 0.337],
      'SCH 5': [2.11, 0.083],
      'SCH 10': [3.05, 0.12],
      'SCH 30': [4.78, 0.188],
      STD: [6.02, 0.237],
    },
  },
  {
    nps: '5',
    odMm: 141.3,
    schedules: {
      'SCH 5S': [2.77, 0.109],
      'SCH 10S': [3.4, 0.134],
      'SCH 40S': [6.55, 0.258],
      'SCH 80S': [9.53, 0.375],
      'SCH 5': [2.77, 0.109],
      'SCH 10': [3.4, 0.134],
      STD: [6.55, 0.258],
    },
  },
  {
    nps: '6',
    odMm: 168.3,
    schedules: {
      'SCH 5S': [2.77, 0.109],
      'SCH 10S': [3.4, 0.134],
      'SCH 40S': [7.11, 0.28],
      'SCH 80S': [10.97, 0.432],
      'SCH 5': [2.77, 0.109],
      'SCH 10': [3.4, 0.134],
      STD: [7.11, 0.28],
    },
  },
]

function expandRows(
  table: PipeTable,
  sourceLabel: string,
  rows: readonly PipeRow[],
): PipeRecord[] {
  return rows.flatMap((row) =>
    Object.entries(row.schedules).map(([schedule, thickness]) => ({
      table,
      nps: row.nps,
      schedule,
      odMm: row.odMm,
      thicknessMm: thickness[0],
      thicknessIn: thickness[1],
      sourceLabel,
      sourceCell: `NPS ${row.nps} / ${schedule}`,
      review: 'source-checked' as const,
    })),
  )
}

export const PIPE_RECORDS: readonly PipeRecord[] = [
  ...expandRows(
    'TABLE_1',
    '사용자 제공 PIPE SCHEDULES 표 1',
    TABLE_1_ROWS,
  ),
  ...expandRows(
    'TABLE_2',
    '사용자 제공 PIPE SCHEDULES 표 2',
    TABLE_2_ROWS,
  ),
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