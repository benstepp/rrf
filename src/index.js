import factory from './factory'

module.exports = function ref(component, name) {
  return factory(component, name)
}
