export default function functionName(func, name) {
  const descriptor = {
    value: name,
    writable: true,
    configurable: true,
  }

  Object.defineProperty(func, 'name', descriptor)
}
