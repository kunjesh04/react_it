import React from 'react'
import { useState } from 'react'

function Counter(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({ fName: "", lName: "" })

    /* 
    count var will be initialized with 0 [arg passed in useState method]
    setCount method will be able to manipulate the var count
    */

    return (
        <div>
            


            <h1><br /></h1>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
            <br />
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
            <br />
            <button onClick={() => setCount(prevCount => prevCount ** 2)}>Square It!</button>
            <br />
            <button onClick={() => setCount(prevCount => prevCount ** (1 / 2))}>Root It!</button>
            <br />
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}


export default Counter

