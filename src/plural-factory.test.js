import plural from './plural-factory'

class Stub {}

describe('pluralFactory', () => {
  it('retuns a function', () => {
    const instance = new Stub()
    const ref = plural(instance, 'name')
    expect(typeof ref).toBe('function')
  })

  it('always creates a new function', () => {
    const instance = new Stub()
    const refA = plural(instance, 'name')
    const refB = plural(instance, 'name')
    expect(refA).not.toBe(refB)
  })

  it('has plural in the function name', () => {
    const instance = new Stub()
    const ref = plural(instance, 'name')
    expect(ref.name).toContain('plural')
  })

  it('has ref in the function name', () => {
    const instance = new Stub()
    const ref = plural(instance, 'name')
    expect(ref.name).toContain('ref')
  })

  it('has the name in the function name', () => {
    const instance = new Stub()
    const ref = plural(instance, 'name')
    expect(ref.name).toContain('name')
  })

  it('has the component name in the function name', () => {
    const instance = new Stub()
    const ref = plural(instance, 'name')
    expect(ref.name).toContain('Stub')
  })
})
