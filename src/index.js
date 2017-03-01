import cache from './cache'
import factory from './factory'

export default function ref(component, name) {
  const functions = cache.get(component)

  if (!functions.hasOwnProperty(name)) {
    const reference = factory(component, name)
    functions[name] = reference
  }

  return functions[name]
}
