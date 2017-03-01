# easy-ref

Refs in React, but easy. A dependency-less, replacement for string refs in
react.js.

## Features

- regular references
- plural references

### Installation

```
yarn add easy-ref
```

### Usage

#### Exmaple of a singular ref

```jsx
import React, { Component } from 'react'
import ref from 'easy-ref'

export default class TheBest extends Component {
  componentDidMount() {
    console.log(this.refs.div) // div
  }
  render() {
    return <div ref={ref(this, 'div')} />
  }
}
```

#### Exmaple of a plural ref

```jsx
import React, { Component } from 'react'
import ref from 'easy-ref'

export default class TheBest extends Component {
  componentDidMount() {
    console.log(this.refs.divs) // [div, div, div, div]
  }

  render() {
    return (
      <div>
        <div ref={ref(this, 'divs')} />
        <div ref={ref(this, 'divs')} />
        <div ref={ref(this, 'divs')} />
        <div ref={ref(this, 'divs')} />
      </div>
    )
  }
}
```
