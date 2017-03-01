import React, { Component, PureComponent } from 'react'
import { mount } from 'enzyme'
import ref from '../src'

describe('Passing plural references', () => {
  it('adds the reference to refs', () => {
    class Test extends Component {
      render() {
        return <ChildComponent reference={ref(this, 'letters')} />
      }
    }

    class ChildComponent extends Component {
      render() {
        return (
          <div>
            <div ref={this.props.reference}>A</div>
            <div ref={this.props.reference}>B</div>
            <div ref={this.props.reference}>C</div>
          </div>
        )
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.letters.length).toBe(3)
  })

  it('works when passing the ref to a PureComponent', () => {
    class Test extends Component {
      render() {
        return <ChildComponent reference={ref(this, 'letters')} />
      }
    }

    class ChildComponent extends PureComponent {
      render() {
        return (
          <div>
            <div ref={this.props.reference}>A</div>
            <div ref={this.props.reference}>B</div>
            <div ref={this.props.reference}>C</div>
          </div>
        )
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.letters.length).toBe(3)
  })

  it('works when passing the ref to a SFC', () => {
    class Test extends Component {
      render() {
        return <ChildComponent reference={ref(this, 'letters')} />
      }
    }

    function ChildComponent({ reference }) {
      return (
        <div>
          <div ref={reference}>A</div>
          <div ref={reference}>B</div>
          <div ref={reference}>C</div>
        </div>
      )
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.letters.length).toBe(3)
  })

  it('works when using pure components', () => {
    class Test extends PureComponent {
      render() {
        return <ChildComponent reference={ref(this, 'letters')} />
      }
    }

    class ChildComponent extends PureComponent {
      render() {
        return (
          <div>
            <div ref={this.props.reference}>A</div>
            <div ref={this.props.reference}>B</div>
            <div ref={this.props.reference}>C</div>
          </div>
        )
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.letters.length).toBe(3)
  })
})
