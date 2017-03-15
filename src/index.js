import cache from './cache'
import factory from './factory'

module.exports = function ref(component, name) {
  if (!cache.has(component, name)) {
    const reference = factory(component, name)
    cache.set(component, name, reference)
  }

  return cache.get(component, name)
}
