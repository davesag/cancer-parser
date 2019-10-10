const { expect } = require('chai')

const byYear = require('../../../../src/utils/solarFlare/reduceByYear')

const { flareRows } = require('../../../utils/dummyData')

describe('src/utils/solarFlare/reduceByYear', () => {
  const flares = flareRows('1985-01-01', '1986-12-31')

  let result

  before(() => {
    result = flares.reduce(byYear, {})
  })

  it('only returned results for 1985 and 1986', () => {
    expect(Object.keys(result)).to.have.length(2)
    expect(result).to.have.all.keys(['1985', '1986'])
  })

  it('returned 12 months of results for 1985', () => {
    expect(Object.keys(result['1985'])).to.have.length(13)
  })

  it('months are natural numbered not zero based', () => {
    expect(result).not.to.have.nested.property('1985.00')
    expect(result).to.have.nested.property('1985.12')
  })

  it('returned a sum for 1985', () => {
    expect(result).to.have.nested.property('1985.sum')
  })

  it('returned a sum for 1985.12', () => {
    expect(result).to.have.nested.property('1985.12.sum')
  })

  it('the sum for 1985 has north, south, and total', () => {
    expect(result['1985'].sum).to.have.all.keys(['north', 'south', 'total'])
  })

  it('the sum for 1985.12 has north, south, and total', () => {
    expect(result['1985']['12'].sum).to.have.all.keys([
      'north',
      'south',
      'total'
    ])
  })

  it('the day 1985.12.31 has north, south, and total', () => {
    expect(result['1985']['12']['31']).to.have.all.keys([
      'north',
      'south',
      'total'
    ])
  })
})
