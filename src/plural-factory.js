import functionName from './utils/function-name'
import componentName from './utils/component-name'
import initializeRefs from './utils/initialize-refs'
import attachRefs from './utils/attach-refs'

export default function pluralFactory(component, name) {
  initializeRefs(component)
  attachRefs(component, name, [])

  const ref = (c) => {
    if (!c) return
    const included = component.refs[name].indexOf(c) > -1
    if (!included) component.refs[name].push(c)
  }

  functionName(ref, `plural_ref(${componentName(component)}, ${name})`)
  return ref
}
