import React, { Component } from 'react'
import Child from './Child';
import { PureComponent } from 'react';

export default class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            retirement: 0,
        };

        this.afterRetirement=this.afterRetirement.bind(this);
    }

    updateName = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    afterRetirement(amount) {
        console.log('Parent Retirement');
        this.setState((prevState) => ({
            retirement: prevState.retirement + amount,
        }));
    }
    render() {
        return (
            <div>
                <h1>Parent</h1>
                <Child education="Engineering" retirement={this.afterRetirement}/>
                <button>Retirement : {this.state.retirement}</button>
                <PureComponent/>
            </div>
        )
    }
}
