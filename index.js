const { parseCancerData, parseSolarFlareData } = require('./src')

parseCancerData('./data/all-cancers-combined-acim.xlsx')
  .then(({ incidents, populations }) => {
    console.log('Incidents', incidents)
    console.log('Populations', populations)
  })
  .catch(err => {
    console.error(err)
  })

parseSolarFlareData('./data/cfi_daily_1966-2008.xlsx')
  .then(({ flares }) => {
    console.log(JSON.stringify(flares, null, 2))
  })
  .catch(err => {
    console.error(err)
  })
