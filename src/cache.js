const cache = new WeakMap()

const NULL_OBJECT = Object.create(null)
const hasOwnProperty = (object, key) => Object.prototype.hasOwnProperty.call(object, key)

export default class Cache {
  static has(instance, key) {
    const functions = cache.get(instance) || NULL_OBJECT
    return hasOwnProperty(functions, key)
  }

  static get(instance, key) {
    const functions = cache.get(instance) || NULL_OBJECT
    return functions[key]
  }

  static set(instance, key, value) {
    const functions = cache.get(instance) || this.initialize(instance)
    functions[key] = value
    return value
  }

  static initialize(instance) {
    const functions = Object.create(null)
    cache.set(instance, functions)
    return functions
  }
}
