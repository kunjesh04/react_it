import React, { Component } from 'react'

export default class ClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    });
  }

  componentDidMount(){
    document.title="Counter";
  }

  componentDidUpdate(){
    document.title=`Clicked ${this.state.count} times`;
  }

  componentWillUnmount(){
    console.log('Will Unmount');
  }

  render() {
    return (
      <div>
        <h3>ClassCounter</h3>
        <button onClick={this.increment}>Clicked {this.state.count} times</button>
      </div>
    )
  }
}
