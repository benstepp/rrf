import functionName from './utils/function-name'
import componentName from './utils/component-name'
import initializeRefs from './utils/initialize-refs'
import attachRefs from './utils/attach-refs'

export default function singularFactory(component, name) {
  initializeRefs(component)
  const ref = (c) => {
    attachRefs(component, name, c)
  }

  functionName(ref, `singular_ref(${componentName(component)}, ${name})`)
  return ref
}
