const readXlsxFile = require('read-excel-file/node')
const byYear = require('./utils/cancer/reduceByYear')

const parseCancerData = async path => {
  const [incidenceData, populationData] = await Promise.all([
    readXlsxFile(path, { sheet: 'Incidence counts' }),
    readXlsxFile(path, { sheet: 'Populations' })
  ])

  const incidents = incidenceData.slice(71).reduce(byYear(true), {})
  const populations = populationData.slice(123).reduce(byYear(false), {})

  return {
    incidents,
    populations
  }
}

module.exports = parseCancerData
