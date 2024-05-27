import React, { useState, useEffect } from 'react'

export default function HookCounter() {
  
    const[count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `useEffect - Clicked ${count} times`
    })

    return (
    <div>
      <h3>Hook Counter</h3>
      <button onClick={()=>setCount(prevCount => prevCount + 1)}>
        useEffect - Clicked {count} times
      </button>
    </div>
  )
}
