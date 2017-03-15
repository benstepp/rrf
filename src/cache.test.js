import cache from './cache'

class Stub {}

describe('cache', () => {
  describe('Map like interface', () => {
    it('has a set function', () => {
      expect(typeof cache.set).toBe('function')
    })

    it('has a get function', () => {
      expect(typeof cache.get).toBe('function')
    })

    it('has a has function', () => {
      expect(typeof cache.has).toBe('function')
    })
  })

  describe('#has', () => {
    it('returns false if no item is set', () => {
      const instance = new Stub()
      expect(cache.has(instance, 'key')).toBe(false)
    })

    it('returns true if it has an item', () => {
      const instance = new Stub()
      const value = () => {}
      cache.set(instance, 'key', value)
      expect(cache.has(instance, 'key')).toBe(true)
    })

    it('returns false when checking hasOwnProperty', () => {
      const instance = new Stub()
      expect(cache.has(instance, 'hasOwnProperty')).toBe(false)
    })

    it('returns false when checking prototype', () => {
      const instance = new Stub()
      expect(cache.has(instance, 'prototype')).toBe(false)
    })
  })

  describe('#get', () => {
    it('returns the same set value', () => {
      const instance = new Stub()
      const value = () => {}
      cache.set(instance, 'key', value)
      expect(cache.get(instance, 'key')).toBe(value)
    })

    it('returns undefined if nothing is set', () => {
      const instance = new Stub()
      expect(cache.get(instance, 'key')).toBe(undefined)
    })

    it('works if the user sets as hasOwnProperty', () => {
      const instance = new Stub()
      const value = () => {}
      cache.set(instance, 'hasOwnProperty', value)
      expect(cache.get(instance, 'hasOwnProperty')).toBe(value)
    })

    it('works if the user sets as prototype', () => {
      const instance = new Stub()
      const value = () => {}
      cache.set(instance, 'prototype', value)
      expect(cache.get(instance, 'prototype')).toBe(value)
    })
  })
})
