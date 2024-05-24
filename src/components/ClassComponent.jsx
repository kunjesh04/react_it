import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         education: props.education,
         amount: props.amount
      }

    this.higherStudies = this.higherStudies.bind(this)
    }
    
    // higherStudies = () => {
    //     console.log('Called HS');
    //     this.state.education = 'MD';
    // }



    higherStudies(){
        console.log('Called HS', this);
        this.state.education = 'MD';
        this.setState({education:'MD'})
    }

  render() {
    console.log('Render', this)
    return (
      <div>
        <br></br>
        <h2>Education : {this.state.education}</h2>
        <p>Amount : {this.state.amount}</p>
        <button onClick={this.higherStudies}>PG</button>
      </div>
    )
  }
}
