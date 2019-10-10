const toAge = require('./reduceToAge')

const reduceByYear = includeUnknown => (acc, elem) => {
  const data = elem.slice(1)
  const [year] = data
  if (year) {
    const ages = data.slice(1, 19)
    const [unknown, total] = data.slice(19)
    acc[year] = ages.reduce(toAge, {})
    if (includeUnknown) {
      acc[year].unknown = unknown
      acc[year].total = total
    } else {
      acc[year].total = unknown
    }
  }
  return acc
}

module.exports = reduceByYear
