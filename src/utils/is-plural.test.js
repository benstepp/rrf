import isPlural from './is-plural'

describe('isPlural', () => {
  it('retuns true for words ending with s', () => {
    expect(isPlural('letters')).toBe(true)
    expect(isPlural('lines')).toBe(true)
    expect(isPlural('images')).toBe(true)
    expect(isPlural('words')).toBe(true)
  })

  it('retuns false for words not ending with s', () => {
    expect(isPlural('image')).toBe(false)
    expect(isPlural('container')).toBe(false)
    expect(isPlural('div')).toBe(false)
    expect(isPlural('title')).toBe(false)
    expect(isPlural('spaceship')).toBe(false)
  })
})
