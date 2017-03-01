const cache = Symbol('cache')
let internal = new WeakMap()

export default class Cache {
  static get [cache]() {
    return internal
  }

  static get(key) {
    if (!this[cache].has(key)) {
      this[cache].set(key, {})
    }

    return this[cache].get(key)
  }
}
