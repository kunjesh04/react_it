import React, { Component } from 'react'

export default class CounterDiv extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         num:props.num

      }
      this.increase = this.increase.bind(this);
      this.decrease = this.decrease.bind(this);
      this.increaseN = this.increaseN.bind(this);

    }
    


    increaseN(n){
        for (let i=0; i<n; i++){
            this.increase()
        }
    }

    increase(){
        // this.setState({num : this.state.num + 1})
        this.setState((prevState)=>({num : prevState.num + 1}))
    }
    decrease(){
        this.setState({num:this.state.num-1})
    }

    render() {
    return (
      <div>
        <button onClick={this.decrease}>Decrease</button>
        <h3>{this.state.num}</h3>
        <button onClick={this.increase}>Increase</button>
        <button onClick={()=>this.increaseN(5)}>Increase 5</button>
      </div>
    )
  }
}
