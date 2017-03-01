import isPlural from './utils/is-plural'
import plural from './plural-factory'
import singular from './singular-factory'

export default function factory(component, name) {
  const plural = isPlural(name)
  return plural ? plural(component, name) : singular(component, name)
}
