import functionName from './utils/function-name'
import componentName from './utils/component-name'

export default function singularFactory(component, name) {
  const ref = (c) => {
    if (!c) return
    component[name] = c
  }

  functionName(ref, `singular_ref(${componentName(component)}, ${name})`)
  return ref
}
