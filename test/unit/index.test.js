const { expect } = require('chai')

const { parseData } = require('../../src')

describe('src', () => {
  describe('parseData', () => {
    it('is a function', () => {
      expect(parseData).to.be.a('function')
    })
  })
})
