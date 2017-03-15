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

  it('works with pure components', () => {
    class Test extends PureComponent {
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

  it('will always use an array', () => {
    class Test extends PureComponent {
      render() {
        return (
          <div>
            <div ref={ref(this, 'divs')} />
          </div>
        )
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(Array.isArray(instance.refs.divs)).toBe(true)
    expect(instance.refs.divs.length).toBe(1)
  })

  it('does not add null to refs', () => {
    class Div extends Component { render() { return <div /> } }

    class Test extends Component {
      state = { count: 2 }
      render() {
        let divs = []
        for (let i = 0; i < this.state.count; i++) {
          divs.push(<Div ref={ref(this, 'divs')} key={i} />)
        }

        return (
          <div>
            {divs}
          </div>
        )
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.divs.length).toBe(2)
    wrapper.setState({ count: 1 })
    instance.refs.divs.forEach(div => {
      expect(div).not.toBe(null)
    })
  })
})
