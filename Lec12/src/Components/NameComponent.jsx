import React from 'react'
import "../App.css"
export default function NameComponent(props) {
  return (
   <>
   <div className={`namesBox ${props.chnageColor}`}>
    <h1>my name is {props.name}</h1>
   </div>
   </>
  )
}
