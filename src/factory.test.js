import factory from './factory'

class Stub {}

describe('factory', () => {
  it('retuns a function', () => {
    const instance = new Stub()
    const ref = factory(instance, 'name')
    expect(typeof ref).toBe('function')
  })

  it('always creates a new function', () => {
    const instance = new Stub()
    const refA = factory(instance, 'name')
    const refB = factory(instance, 'name')
    expect(refA).not.toBe(refB)
  })
})
