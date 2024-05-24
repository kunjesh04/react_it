import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       text:props.text
    }

    // Props of Parent
    console.log(this.props)

    // Props "text" of Parent
    console.log(this.props.text)

    // Children of Parent {Array}
    console.log(this.props.children)

    // First Child of Parent {Object of Array}
    console.log(this.props.children[0])

    // Props "name" of first child of Parent
    console.log(this.props.children[0].props.name)

    // First child Element of Parent
    console.log(this.props.children[0].props.children)


    console.log('All this Children...')
    // All the Children
    this.props.children.forEach(element => {
      console.log(element.props.children)
    });
    
    this.toggle = this.toggle.bind(this);
  }
  
  toggle(){
    let txt = this.state.text;
    this.setState({ text:(txt==txt.toLowerCase()) ? txt.toUpperCase() : txt.toLowerCase() })
  }
    render() {
    return (
      <div>
        <h2>{this.state.text}</h2>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}
