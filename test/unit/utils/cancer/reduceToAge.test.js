const { expect } = require('chai')

const reduceToAge = require('../../../../src/utils/cancer/reduceToAge')

const { incidentRow } = require('../../../utils/dummyData')

describe('src/utils/cancer/reduceToAge', () => {
  const ages = incidentRow(1985).slice(1)

  let result

  const doTest = index => {
    const age = `age${index * 5}`

    it(`has property ${age}`, () => {
      expect(result).to.have.property(age)
    })
  }

  before(() => {
    result = ages.reduce(reduceToAge, {})
  })

  Array.from({ length: 18 }, (n, i) => i).forEach(doTest)
})
