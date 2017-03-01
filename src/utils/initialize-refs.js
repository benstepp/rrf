export default function initializeRefs(component) {
  if (!Object.isFrozen(component.refs)) return
  component.refs = { ...component.refs }
}
