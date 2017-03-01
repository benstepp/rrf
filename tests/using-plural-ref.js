import React, { Component, PureComponent } from 'react'
import { mount } from 'enzyme'
import ref from '../src'

describe('Using Plural References', () => {
  it('works with components', () => {
    class Test extends Component {
      render() {
        return (
          <div>
            <div ref={ref(this, 'divs')} />
            <div ref={ref(this, 'divs')} />
          </div>
        )
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.divs).toBeTruthy()
    expect(Array.isArray(instance.refs.divs)).toBe(true)
    expect(instance.refs.divs.length).toBe(2)
    expect(instance.refs.notHere).toBeUndefined()
  })
})
