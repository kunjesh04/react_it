import React, { Component } from 'react'

const Counter = (WrapperComponent) => {
    class Counter extends Component {
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

        render() {
            return (
                <WrapperComponent
                    count={this.state.count}
                    increment={this.increment}
                />
            )
        }
    }
    return Counter
};

export default Counter  