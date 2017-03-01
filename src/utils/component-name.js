const DEFAULT = 'Component'

export default function componentName(component) {
  if (typeof component.type === 'function') {
    return component.type.displayName || component.type.name || DEFAULT
  }

  if (typeof component.constructor === 'function') {
    return component.constructor.displayName || component.constructor.name || DEFAULT
  }

  return component.name || DEFAULT
}
