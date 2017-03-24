import React, { Component, PureComponent } from 'react'
import { mount } from 'enzyme'
import ref from '../src'

describe('SingularReferences', () => {
  it('works with components', () => {
    class Test extends Component {
      render() {
        return <div ref={ref(this, 'div')} />
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.div).toBeTruthy()
    expect(instance.refs.div.tagName).toBe('DIV')
    expect(instance.refs.notHere).toBeUndefined()
  })

  it('works with pure components', () => {
    class Test extends PureComponent {
      render() {
        return <div ref={ref(this, 'div')} />
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.div).toBeTruthy()
    expect(instance.refs.div.tagName).toBe('DIV')
    expect(instance.refs.notHere).toBeUndefined()
  })

  it('can do multiple', () => {
    class Test extends Component {
      render() {
        return (
          <div>
            <h4 ref={ref(this, 'title')}>title</h4>
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

  it('can do multiple with pure components', () => {
    class Test extends PureComponent {
      render() {
        return (
          <div>
            <h4 ref={ref(this, 'title')}>title</h4>
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
})
