import React, { Component } from 'react'
import Counter from './Counter'

class HoverCounter extends Component {

    render() {
        let {count, increment} = this.props
        return (
            <div>
                <button onMouseOver={increment}>Hovered {count} times</button>
            </div>
        )
    }
};

export default Counter(HoverCounter)
