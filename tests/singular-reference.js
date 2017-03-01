import React, { Component } from 'react'
import { mount } from 'enzyme'
import ref from '../src'

describe('SingularReferences', () => {
  it('adds the reference to _refs', () => {
    class Test extends Component {
      render() {
        return <div ref={ref(this, 'div')} />
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.div).toBeTruthy
  })
})
