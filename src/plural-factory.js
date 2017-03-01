import functionName from './utils/function-name'
import componentName from './utils/component-name'

export default function pluralFactory(component, name) {
  const ref = (c) => {
    if (!component[name]) component[name] = []
    if (!c) return

    if (component[name].indexOf(c) > -1) component[name].push(c)
  }

  functionName(ref, `plural_ref(${componentName(component)}, ${name})`)
  return ref
}
