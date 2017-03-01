import functionName from './utils/function-name'
import componentName from './utils/component-name'

export default function singularFactory(component, name) {
  if (!component._refs) component._refs = {}

  const ref = (c) => {
    if (!c) return
    component._refs[name] = c
  }

  functionName(ref, `singular_ref(${componentName(component)}, ${name})`)
  return ref
}
