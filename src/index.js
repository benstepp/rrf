import cache from './cache'
import factory from './factory'

module.exports = function ref(component, name) {
  return cache.get(component, name) || createReference(component, name)
}

function createReference(component, name) {
  const reference = factory(component, name)
  cache.set(component, name, reference)
  return reference
}
