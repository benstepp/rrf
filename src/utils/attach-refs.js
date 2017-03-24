export default function attachRefs(component, name, value) {
  const descriptor = { value, readonly: false, writable: true }
  Object.defineProperty(component.refs, name, descriptor)
}
