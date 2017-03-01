import cache from './cache'

class Stub {}

describe('cache', () => {
  it('returns an object', () => {
    const instance = new Stub()
    const result = cache.get(instance)
    expect(typeof result).toBe('object')
  })

  it('always returns the same object', () => {
    const instance = new Stub()
    const resultA = cache.get(instance)
    const resultB = cache.get(instance)
    expect(resultA).toBe(resultB)
  })

  it('uses a weakmap to auto garbage collect', () => {
    const cacheKey = Object.getOwnPropertySymbols(cache)[0]
    expect(cache[cacheKey]).toBeInstanceOf(WeakMap)
  })
})
