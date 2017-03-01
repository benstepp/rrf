const DEFAULT = 'Component'

export default function componentName(component) {
  if (typeof component.type === 'function') {
    return component.type.displayName || component.type.name || DEFAULT
  }

  return component.type || DEFAULT
}
