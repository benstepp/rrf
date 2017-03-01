import cache from './cache'
import refFactory from './ref-factory'

export default function ref(component, name) {
  const functions = cache.get(component)

  if (!functions.hasOwnProperty(name)) {
    const reference = refFactory(component, name)
    functions[name] = reference
  }

  return functions[name]
}
