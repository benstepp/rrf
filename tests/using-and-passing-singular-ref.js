import React, { Component, PureComponent } from 'react'
import { mount } from 'enzyme'
import ref from '../src'

describe('Using and Passing Singular Refs', () => {
  it('works with components', () => {
    class Test extends Component {
      render() {
        return (
          <div>
            <div ref={ref(this, 'div')} />
            <Child ref={ref(this, 'child')} />
          </div>
        )
      }
    }

    class Child extends Component {
      render() {
        return <div ref={this.props.reference} />
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.div).toBeTruthy()
    expect(instance.refs.div.tagName).toBe('DIV')
    expect(instance.refs.child).toBeTruthy()
  })
})
