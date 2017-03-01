export default function attachRefs(component, name, value) {
  const descriptor = { value }
  Object.defineProperty(component.refs, name, descriptor)
}
