const { expect } = require('chai')
const { stub } = require('sinon')
const proxyquire = require('proxyquire')

const { incidentRow, populationRow } = require('../utils/dummyData')

describe('src/parseData', () => {
  const readXlsxFile = stub()
  const reduceByYear = (acc, elem) => {
    acc[elem] = elem
    return acc
  }
  const byYear = stub().returns(reduceByYear)

  const parseData = proxyquire('../../src/parseData', {
    'read-excel-file/node': readXlsxFile,
    './utils/reduceByYear': byYear
  })

  const path = 'some/excel/file.xlsx'

  const incidenceData = Array.from({ length: 72 }, (n, i) =>
    incidentRow(1985 + i)
  )
  const populationData = Array.from({ length: 125 }, (n, i) =>
    populationRow(1985 + i)
  )

  let result

  before(async () => {
    readXlsxFile
      .withArgs(path, { sheet: 'Incidence counts' })
      .resolves(incidenceData)
    readXlsxFile
      .withArgs(path, { sheet: 'Populations' })
      .resolves(populationData)
    result = await parseData(path)
  })

  it("called readXlsxFile with the path and sheet 'Incidence counts'", () => {
    expect(readXlsxFile).to.have.been.calledWith(path, {
      sheet: 'Incidence counts'
    })
  })

  it('called byYear with true', () => {
    expect(byYear).to.have.been.calledWith(true)
  })

  it("called readXlsxFile with the path and sheet 'Populations'", () => {
    expect(readXlsxFile).to.have.been.calledWith(path, { sheet: 'Populations' })
  })

  it('called byYear with false', () => {
    expect(byYear).to.have.been.calledWith(false)
  })

  it('returned the correct keys', () => {
    expect(result).to.have.property('incidents')
    expect(result).to.have.property('populations')
  })
})
