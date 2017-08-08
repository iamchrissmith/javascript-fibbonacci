const assert = require('chai').assert
const fibbonacci = require('../fibbonacci.js')

describe('return array of fibbonacci numbers', () => {
    it('it returns update to first five F numbers in array', () => {
      const fSequencer = new fibbonacci(5)
      const result = fSequencer.getFNumbers()
      assert.isArray(result)
      assert.equal(result.length, 1)
      assert.isArray(result[0])
      assert.equal(result[0].length,5)
      assert.equal(result[0][0], 0)
      assert.equal(result[0][1], 1)
      assert.equal(result[0][2], 1)
      assert.equal(result[0][3], 2)
      assert.equal(result[0][4], 3)
    })
    it('it returns a second array starting at the 6th F number', () => {
      const fSequencer = new fibbonacci(6)
      const result = fSequencer.getFNumbers()
      assert.isArray(result)
      assert.equal(result.length, 2)
      assert.isArray(result[1])
      assert.equal(result[0].length,5)
      assert.equal(result[1].length,1)
      assert.equal(result[0][0], 0)
      assert.equal(result[1][0], 5)
    })
    it('it returns a full second array and first element of third', () => {
      const fSequencer = new fibbonacci(11)
      const result = fSequencer.getFNumbers()
      assert.isArray(result)
      assert.equal(result.length, 3)
      assert.isArray(result[1])
      assert.equal(result[1].length,5)
      assert.equal(result[2].length,1)
      assert.equal(result[0][0], 0)
      assert.equal(result[1][0], 5)
      assert.equal(result[1][1], 8)
      assert.equal(result[1][2], 13)
      assert.equal(result[1][3], 21)
      assert.equal(result[1][4], 34)
      assert.equal(result[2][0], 55)
    })
    it('it returns 15th F Number', () => {
      const fSequencer = new fibbonacci(15)
      const result = fSequencer.getFNumbers()
      assert.equal(result[2][4], 377)
    })
})