const { parseData } = require('./src')

parseData('./all-cancers-combined-acim.xlsx')
  .then(({ incidents, populations }) => {
    console.log('Incidents', incidents)
    console.log('Populations', populations)
  })
  .catch(err => {
    console.error(err)
  })
