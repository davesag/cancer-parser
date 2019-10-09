const { expect } = require('chai')
const proxyquire = require('proxyquire')

const { incidentRow } = require('../../utils/dummyData')

describe('src/utils/reduceByYear', () => {
  const reduceToAge = (acc, elem, index) => {
    acc[`age${index}`] = elem
    return acc
  }

  const reduceByYear = proxyquire('../../../src/utils/reduceByYear', {
    './reduceToAge': reduceToAge
  })

  let result

  context('include unknown', () => {
    const incidents = [[null, ...incidentRow(1985)]]
    const byYear = reduceByYear(true)

    before(() => {
      result = incidents.reduce(byYear, {})
    })

    it('is keyed by the year', () => {
      expect(result).to.have.property('1985')
    })

    it('the year has a total', () => {
      expect(result).to.have.nested.property('1985.total')
    })

    it('the year has an unknown', () => {
      expect(result).to.have.nested.property('1985.unknown')
    })
  })

  context('do not include unknown', () => {
    const incidents = [[null, ...incidentRow(1985)]]
    const byYear = reduceByYear(false)

    before(() => {
      result = incidents.reduce(byYear, {})
    })

    it('is keyed by the year', () => {
      expect(result).to.have.property('1985')
    })

    it('the year has a total', () => {
      expect(result).to.have.nested.property('1985.total')
    })

    it('the year does not have an unknown', () => {
      expect(result).not.to.have.nested.property('1985.unknown')
    })
  })

  context('empty row', () => {
    const incidents = [Array.from({ length: 20 }, () => null)]
    const byYear = reduceByYear(false)

    before(() => {
      result = incidents.reduce(byYear, {})
    })

    it('has no data', () => {
      expect(result).not.to.have.any.keys
    })
  })
})
