import singular from './singular-factory'

class Stub {}

describe('singularFactory', () => {
  it('retuns a function', () => {
    const instance = new Stub()
    const ref = singular(instance, name)
    expect(typeof ref).toBe('function')
  })

  it('always creates a new function', () => {
    const instance = new Stub()
    const refA = singular(instance, 'name')
    const refB = singular(instance, 'name')
    expect(refA).not.toBe(refB)
  })

  it('has plural in the function name', () => {
    const instance = new Stub()
    const ref = singular(instance, 'name')
    expect(ref.name).toContain('singular')
  })

  it('has ref in the function name', () => {
    const instance = new Stub()
    const ref = singular(instance, 'name')
    expect(ref.name).toContain('ref')
  })

  it('has the name in the function name', () => {
    const instance = new Stub()
    const ref = singular(instance, 'name')
    expect(ref.name).toContain('name')
  })

  it('has the component name in the function name', () => {
    const instance = new Stub()
    const ref = singular(instance, 'name')
    expect(ref.name).toContain('Stub')
  })
})
