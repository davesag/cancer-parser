const { expect } = require('chai')

const { parseCancerData } = require('../../src')

describe('src', () => {
  describe('parseCancerData', () => {
    it('is a function', () => {
      expect(parseCancerData).to.be.a('function')
    })
  })
})
