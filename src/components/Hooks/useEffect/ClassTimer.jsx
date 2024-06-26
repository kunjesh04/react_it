import React, { Component } from 'react'

export default class ClassTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: 0
        }
    }


    componentDidMount() {
        this.interval = setInterval(()=>{
            this.setState(prevState=>({timer : prevState.timer+1}))
        }, 1000)    
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h3>ClassTimer</h3>
                <h4>Timer: {this.state.timer}</h4>
                <button onClick={()=>clearInterval(this.interval)}>Stop Timer</button>
            </div>
        )
    }
}
