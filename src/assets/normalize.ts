const NPS_BY_NUMBER = new Map<number, string>([
  [0.125, '1/8'],
  [0.25, '1/4'],
  [0.375, '3/8'],
  [0.5, '1/2'],
  [0.75, '3/4'],
  [1, '1'],
  [1.25, '1¼'],
  [1.5, '1½'],
  [2, '2'],
  [2.5, '2½'],
  [3, '3'],
  [3.5, '3½'],
  [4, '4'],
  [5, '5'],
  [6, '6'],
  [8, '8'],
  [10, '10'],
  [12, '12'],
  [14, '14'],
  [16, '16'],
  [18, '18'],
  [20, '20'],
  [22, '22'],
  [24, '24'],
  [26, '26'],
  [28, '28'],
  [30, '30'],
  [32, '32'],
  [34, '34'],
  [36, '36'],
  [38, '38'],
  [40, '40'],
  [42, '42'],
  [44, '44'],
  [46, '46'],
  [48, '48'],
])

function parseNpsNumber(value: string): number | null {
  const cleaned = value
    .toUpperCase()
    .replace(/NPS/g, '')
    .replace(/"/g, '')
    .replace(/[‐-–—-]/g, ' ')
    .replace(/¼/g, ' 1/4')
    .replace(/½/g, ' 1/2')
    .replace(/¾/g, ' 3/4')
    .trim()
    .replace(/\s+/g, ' ')

  if (!cleaned) return null

  const mixedFraction = cleaned.match(/^(\d+)\s+(\d+)\/(\d+)$/)
  if (mixedFraction) {
    const [, whole, numerator, denominator] = mixedFraction
    return Number(whole) + Number(numerator) / Number(denominator)
  }

  const fraction = cleaned.match(/^(\d+)\/(\d+)$/)
  if (fraction) {
    const [, numerator, denominator] = fraction
    return Number(numerator) / Number(denominator)
  }

  const number = Number(cleaned)
  return Number.isFinite(number) ? number : null
}

export function normalizeNps(value: string): string {
  const parsed = parseNpsNumber(value)

  if (parsed === null) return ''

  const rounded = Math.round(parsed * 1000) / 1000
  return NPS_BY_NUMBER.get(rounded) ?? ''
}

export function normalizeSchedule(value: string): string {
  const cleaned = value.toUpperCase().replace(/[\s_-]/g, '')

  if (!cleaned) return ''

  if (cleaned === 'STD') return 'STD'
  if (cleaned === 'XS') return 'XS'
  if (cleaned === 'XXS') return 'XXS'

  const normalMatch = cleaned.match(/^(?:SCH)?(\d+)(S?)$/)
  if (normalMatch) {
    const [, number, stainlessSuffix] = normalMatch
    return `SCH ${number}${stainlessSuffix}`
  }

  const stainlessFirstMatch = cleaned.match(/^S(\d+)$/)
  if (stainlessFirstMatch) {
    return `SCH ${stainlessFirstMatch[1]}S`
  }

  return ''
}