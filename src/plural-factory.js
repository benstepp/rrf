import functionName from './utils/function-name'
import componentName from './utils/component-name'

export default function pluralFactory(component, name) {
  if (!component._refs) component._refs = {}
  if (!component._refs[name]) component._refs[name] = []

  const ref = (c) => {
    if (!c) return

    if (component._refs[name].indexOf(c) > -1) component._refs[name].push(c)
  }

  functionName(ref, `plural_ref(${componentName(component)}, ${name})`)
  return ref
}
