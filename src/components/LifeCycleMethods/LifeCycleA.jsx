import React, { Component } from 'react'

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Kunjesh",
       width: 0,
       height: 0
    }
    console.log('LifeCycleA Constructor');
  }

  static getDerivedStateFromProps(props, state){
    console.log('LifeCycleA getDerivedStateFromProps');
    return null;
  }

  handleWindow=()=>{
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  componentDidMount(){
    console.log('LifeCycleA componentDidMount');
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
    window.addEventListener('resize', this.handleWindow);
  }

  changeState=()=>{
    this.setState({
       name: "Kunjesh Panchal"
    })
  }
  
  
    render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>Width: {this.state.width}</h3>
        <h3>Height: {this.state.height}</h3>
        <button onClick={this.changeState}>Change State</button>
        LifeCycleA
      </div>
    )
  }
}
