import React, { PureComponent } from 'react'

// Pure component re-renders only when currState is different from prevState. 

/* Pure component only does a shallow comparison between curr and prev states.
We can  modify how this comparison is done and for that we have to know Component Life Cycle Methods.
*/
// If the parent is pure component; all of its children should be pure components
// Class Component can extend `PureComponent`
// Functional component can use memo.

export default class PureComponent extends PureComponent {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
