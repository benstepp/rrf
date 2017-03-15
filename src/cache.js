const cache = new WeakMap()

const hasOwnProperty = (object, key) => Object.prototype.hasOwnProperty.call(object, key)

export default class Cache {
  static has(instance, key) {
    this.initialize(instance)
    const functions = cache.get(instance)
    return hasOwnProperty(functions, key)
  }

  static get(instance, key) {
    this.initialize(instance)
    const functions = cache.get(instance)
    return functions[key]
  }

  static set(instance, key, value) {
    this.initialize(instance)
    const functions = cache.get(instance)
    functions[key] = value
  }

  static initialize(instance) {
    if (cache.has(instance)) return
    cache.set(instance, Object.create(null))
  }
}
