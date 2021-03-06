import plural from './plural-factory'

class Stub {
  get type() { return this.constructor }
}

describe('pluralFactory', () => {
  it('retuns a function', () => {
    const instance = new Stub()
    const ref = plural(instance, 'name')
    expect(typeof ref).toBe('function')
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
