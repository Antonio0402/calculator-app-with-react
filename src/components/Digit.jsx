import React from 'react'
import { action } from '../App'

function Digit({dispatch, digit}) {
  return (
    <button className="key" onClick={() => dispatch({type: action.ADD_DIGIT, payload:  { digit }})}>{digit}</button>
  )
}

export default Digit