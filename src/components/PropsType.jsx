import React from 'react'
import PropTypes from 'prop-types'

function PropsType(props) {
  return (
    <div>
      <h3>PropsTypes</h3>
      <h5>{props.name}</h5>
      <h5>{props.age}</h5>
      <h5>{props.isMarried ? 'Married' : 'Unmarried'}</h5>
    
      {/* <h5>{props.array}</h5> 
      This will print [4,5] as 45
      Thus, we have to use Array Join to print array*/}
    
      <h5>{props.array.join(',')}</h5>
      <h5>{JSON.stringify(props.obj)}</h5>
      <h4>{props.age>18 ? 'Elligible to vote!' : 'Still a kid!! LMAOOO'}</h4>
    </div>
  )
}

PropsType.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isMarried: PropTypes.bool.isRequired,
    array: PropTypes.array.isRequired,
    obj: PropTypes.shape({
        s:PropTypes.number.isRequired,
        a:PropTypes.number.isRequired,
        t:PropTypes.number.isRequired,
        o:PropTypes.number.isRequired,
        r:PropTypes.number.isRequired,
        u:PropTypes.number.isRequired
    })
}

export default PropsType

