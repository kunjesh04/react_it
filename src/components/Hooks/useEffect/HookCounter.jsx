import React, { useState, useEffect } from 'react'

export default function HookCounter() {
  
    const[count, setCount] = useState(0);
    const[name, setName] = useState('');

    useEffect(()=>{
        console.log('Title is updated');
        document.title = `useEffect - Clicked ${count} times`;
    }, [count]);
    // Second arg [count] means that only when there is any change is elements of array, re-rendering is done. Otherwise not.

    return (
    <div>
      <h3>Hook Counter</h3>
      <button onClick={()=>setCount(prevCount => prevCount + 1)}>
        useEffect - Clicked {count} times
      </button>
      <br />
      <input type='text' onChange={e=>setName(e.target.value)} />
    </div>
  )
}
