const ZERO_SUM = { north: 0, south: 0, total: 0 }

const reduceByYear = (acc, elem) => {
  const [date, _offset, _jd, north, south, total] = elem
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  const record = {
    north,
    south,
    total
  }
  if (!acc[year])
    acc[year] = {
      [month]: {
        sum: { ...ZERO_SUM }
      },
      sum: { ...ZERO_SUM }
    }
  if (!acc[year][month]) acc[year][month] = { sum: { ...ZERO_SUM } }

  acc[year][month][day] = record
  acc[year].sum.north += record.north
  acc[year].sum.south += record.south
  acc[year].sum.total += record.total
  acc[year][month].sum.north += record.north
  acc[year][month].sum.south += record.south
  acc[year][month].sum.total += record.total
  return acc
}

module.exports = reduceByYear
