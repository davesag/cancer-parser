const { expect } = require('chai')
const { stub } = require('sinon')
const proxyquire = require('proxyquire')

const { flareRows } = require('../utils/dummyData')

describe('src/parseSolarFlareData', () => {
  const readXlsxFile = stub()
  const reduceByYear = (acc, elem) => {
    acc[elem] = elem
    return acc
  }

  const parseSolarFlareData = proxyquire('../../src/parseSolarFlareData', {
    'read-excel-file/node': readXlsxFile,
    './utils/solarFlare/reduceByYear': reduceByYear
  })

  const path = 'some/excel/file.xlsx'

  const flareData = flareRows('1985-01-01', '1986-12-31')

  let result

  before(async () => {
    readXlsxFile.withArgs(path).resolves(flareData)
    result = await parseSolarFlareData(path)
  })

  it('called readXlsxFile with the path', () => {
    expect(readXlsxFile).to.have.been.calledWith(path)
  })

  it('returned the correct keys', () => {
    expect(result).to.have.property('flares')
  })
})
