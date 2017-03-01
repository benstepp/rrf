import functionName from './utils/function-name'
import componentName from './utils/component-name'
import attachRefs from './utils/attach-refs'

export default function singularFactory(component, name) {
  const ref = (c) => {
    if (!c) return
    attachRefs(component, name, c)
  }

  functionName(ref, `singular_ref(${componentName(component)}, ${name})`)
  return ref
}
