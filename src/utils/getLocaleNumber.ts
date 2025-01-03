import { round } from 'lodash'

const K = {
  divider: 1000,
  title: 'K',
}

const M = {
  divider: 1000000,
  title: 'M',
}

const B = {
  divider: 1000000000,
  title: 'B',
}

const getRoundingData = (
  len: number
): {
  divider: number
  title: string
} => {
  let result: { divider: number; title: string }

  if (len >= 0 && len <= 6) {
    result = K
  } else if (len >= 7 && len <= 9) {
    result = M
  } else {
    result = B
  }

  return result
}

export const getLocaleNumber = (value?: number | null): string => {
  if (value === null || value === undefined) {
    return '-'
  }

  if (value < 1000) {
    return round(value).toString()
  }

  const valueLength = String(Math.round(value)).length
  const { divider, title } = getRoundingData(valueLength)

  return `${round(value / divider, 1)}${title}`
}
