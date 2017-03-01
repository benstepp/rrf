import React, { Component, PureComponent } from 'react'
import { mount } from 'enzyme'
import ref from '../src'

describe('SingularReferences', () => {
  it('adds the reference to refs', () => {
    class Test extends Component {
      render() {
        return <ChildComponent reference={ref(this, 'child')} />
      }
    }

    class ChildComponent extends Component {
      render() {
        return <div ref={this.props.reference} />
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.child).toBeTruthy()
  })

  it('works when passing the ref to a PureComponent', () => {
    class Test extends Component {
      render() {
        return <ChildComponent reference={ref(this, 'child')} />
      }
    }

    class ChildComponent extends PureComponent {
      render() {
        return <div ref={this.props.reference} />
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.child).toBeTruthy()
  })

  it('works when passing the ref to a SFC', () => {
    class Test extends Component {
      render() {
        return <ChildComponent reference={ref(this, 'child')} />
      }
    }

    function ChildComponent({ reference }) {
      return <div ref={reference} />
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.child).toBeTruthy()
  })

  it('works when using pure components', () => {
    class Test extends PureComponent {
      render() {
        return <ChildComponent reference={ref(this, 'child')} />
      }
    }

    class ChildComponent extends PureComponent {
      render() {
        return <div ref={this.props.reference} />
      }
    }

    const wrapper = mount(<Test />)
    const instance = wrapper.instance()
    expect(instance.refs.child).toBeTruthy()
  })
})
