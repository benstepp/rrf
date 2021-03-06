[![Travis](https://travis-ci.org/benstepp/rrf.svg?branch=master)](https://travis-ci.org/benstepp/rrf)
[![Coveralls](https://coveralls.io/repos/github/benstepp/rrf/badge.svg?branch=master)](https://coveralls.io/github/benstepp/rrf?branch=master)
[![CodeClimate](https://img.shields.io/codeclimate/github/benstepp/rrf.svg)](https://codeclimate.com/github/benstepp/rrf)
[![David](https://img.shields.io/david/benstepp/rrf.svg)](https://david-dm.org/benstepp/rrf)
[![NPM](https://img.shields.io/npm/v/rrf.svg)](https://www.npmjs.com/package/rrf)

# rrf

Refs in React, but easy. A dependency-less, replacement for string refs in
react.js. Motivated by all sorts of copy paste refName in our react classes.
You need the refs to do beautiful animations with GSAP, so might as well make
it painless.


```
yarn add rrf
```

---

## Usage

### API

Create a ref by calling ref with a reference to this, and the name you want the
ref to use. If the name ends with an 's' a plural reference will be created. A
plural reference allows you to easily create an array of refs to similar
objects.

```jsx
  ref(this, 'name')
```

### Examples

#### Exmaple of a singular ref

```jsx
import React, { Component } from 'react'
import ref from 'rrf'

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
import ref from 'rrf'

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

#### Example of passing a ref to a child

```jsx
import React, { Component } from 'react'
import ref from 'rrf'

export default class TheBest extends Component {
  componentDidMount() {
    console.log(this.refs.div) // div
  }

  render() {
    return (
      <div>
        <Child reference={ref(this, 'div')} />
      </div>
    )
  }
}

function Child({ reference }) {
  return <div ref={reference} />
}
```
