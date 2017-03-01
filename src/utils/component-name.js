const DEFAULT = 'Component'

export default function componentName(component) {
  if (typeof component.constructor === 'function') {
    return component.constructor.displayName || component.constructor.name || DEFAULT
  }

  return component.name || DEFAULT
}
