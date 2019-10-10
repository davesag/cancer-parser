const readXlsxFile = require('read-excel-file/node')
const byYear = require('./utils/solarFlare/reduceByYear')

const parseSolarFlareData = async path => {
  const flareData = await readXlsxFile(path)

  const flares = flareData.slice(7).reduce(byYear, {})

  return {
    flares
  }
}

module.exports = parseSolarFlareData
