import React from 'react'

export default function Child(props) {
  return (
    <div>
      <h2>Child</h2>
      <button onClick={()=>props.retirement(10000)}>{props.education}</button>
      
    </div>
  )
}
