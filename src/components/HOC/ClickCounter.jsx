import React, { Component } from 'react'
import Counter from './Counter'

class ClickCounter extends Component {

    render() {
        let { count, increment } = this.props

        return (
            <div>
                <button onClick={increment}>
                    Clicked {count} times
                </button>
            </div>

        )
    }
};

export default Counter(ClickCounter)
