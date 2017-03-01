export default function attachRefs(component, name, value) {
  if (component.refs) component.refs = {}
  if (component.refs[name]) {
    const descriptor = { value }
    Object.defineProperty(component.refs, name, descriptor)
  }
}
