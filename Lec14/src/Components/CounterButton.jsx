import React, { useState } from 'react'

export default function CounterButton({count,setCount}) {
    // const [count,setCount] = useState(0)
  return (
   <>
   <div>
    <button onClick={() => {
        setCount(prev => prev + 1)
    }}>count is {count}</button>
   </div>
   </>
  )
}
