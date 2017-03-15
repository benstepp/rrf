import React, { Component } from 'react'
import { mount } from 'enzyme'
import ref from '../src'

describe('StringRefInterop', () => {
  it('works with a string ref', () => {
    class Test extends Component {
      render() {
        return (
          <div>
            <h4 ref='title'>title</h4>
            <p ref={ref(this, 'paragraph')}>paragraph</p>
          </div>
        )
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.title).toBeTruthy()
    expect(instance.refs.title.tagName).toBe('H4')
    expect(instance.refs.paragraph).toBeTruthy()
    expect(instance.refs.paragraph.tagName).toBe('P')
  })

  it('works with multiple string refs', () => {
    class Test extends Component {
      render() {
        return (
          <div>
            <h4 ref='title'>title</h4>
            <p ref={ref(this, 'paragraph')}>paragraph</p>
            <a ref='cta' href='#'>CTA</a>
          </div>
        )
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.title).toBeTruthy()
    expect(instance.refs.title.tagName).toBe('H4')
    expect(instance.refs.paragraph).toBeTruthy()
    expect(instance.refs.paragraph.tagName).toBe('P')
    expect(instance.refs.cta).toBeTruthy()
    expect(instance.refs.cta.tagName).toBe('A')
  })
})
