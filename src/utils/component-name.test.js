import componentName from './component-name'
import React, { Component, PureComponent } from 'react'

describe('componentName', () => {
  it('returns the name of the class', () => {
    class ExtendsComponent extends Component {}
    const instance = <ExtendsComponent />

    expect(componentName(instance)).toBe('ExtendsComponent')
  })

  it('uses displayName es6 get', () => {
    class ExtendsComponent extends Component {
      static get displayName() {
        return 'DisplayName'
      }
    }
    const instance = <ExtendsComponent />

    expect(componentName(instance)).toBe('DisplayName')
  })

  it('uses displayName es7 property', () => {
    class ExtendsComponent extends Component {
      static displayName = 'DisplayName'
    }
    const instance = <ExtendsComponent />

    expect(componentName(instance)).toBe('DisplayName')
  })

  it('returns the name of a sfc', () => {
    function StatelessComponent() { return null }
    const instance = <StatelessComponent />
    expect(componentName(instance)).toBe('StatelessComponent')
  })

  it('uses the displayName of an sfc', () => {
    function StatelessComponent() { return null }
    StatelessComponent.displayName = 'DisplayName'
    const instance = <StatelessComponent />
    expect(componentName(instance)).toBe('DisplayName')
  })
})
