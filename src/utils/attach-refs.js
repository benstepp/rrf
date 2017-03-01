export default function attachRefs(component, name, value) {
  if (component.refs[name]) return
  const descriptor = { value }
  Object.defineProperty(component.refs, name, descriptor)
}
