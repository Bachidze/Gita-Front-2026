// import { useState } from 'react'
// import './App.css'
// // 1) გვქონდეს 1 ღილაკი რომლის დაჭერისასასც ერტი დივი 300ხ300 დივი შეიცვლის რენდომზე ფერებს

import useCounter from "./hooks/Counter/useCounter"

// function App() {

// const [color,setColor] = useState("lightblue")

// function chnageColor(){
//   let colors = ["red","blue","green","orange","pink","purple"]
//   const radnomIndex = Math.floor(Math.random() * colors.length)
  
//   setColor(colors[radnomIndex])
// }
//   return (
//     <>
//     <button className='bg-black rounded-xl text-white px-10 py-10 cursor-pointer' onClick={chnageColor}>change Random Color</button>

//     <div style={{
//       width:"300px",
//       height:"300px",
//       backgroundColor:color
//     }}></div>
//     </>
//   )
// }

// export default App






// export default function App() {
//   const {count,decrement,increment} = useCounter()
//   return (
//     <>
//     <button onClick={increment} className="bg-[red] w-[400px] h-[150px]">Incremnt</button>
//     <button onClick={decrement} className="bg-[red] w-[400px] h-[150px]">Decremnt</button>
//     <h1>{count}</h1>
//     </>
//   )
// }



// import React from 'react'
// import useToggle from "./hooks/toggle/useToggle"

// export default function App() {
//   const {isOpen,toggle} = useToggle()
//   return (
//    <>
//    <div>
//     <button onClick={toggle} className="bg-[blue] w-100 h-40">Toggle</button>
//     {isOpen && <h1>hello</h1>}
//    </div>
//    </>
//   )
// }


// import React from 'react'
// import useInput from "./hooks/Input/useInput"

// export default function App() {
//   const name = useInput()
//   const email = useInput()

//   return (
//    <>
//    <div>

//     <input type="text"
//     placeholder="name"
//     onChange={name.handleChange}
//     />

//     <input type="email"
//     placeholder="email"
//     onChange={email.handleChange}
//     />

//     <p>name / {name.value}</p>
//     <p>email / {email.value}</p>

//    </div>
//    </>

//   )
// }



import React from 'react'
import useFetch from "./hooks/fetch/useFetch"

export default function App() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users")

  return (

    <>
    <div>
  
  {users.map((users:any) => (
    <div key={users.id}>
      {users.username}
    </div>
  ))}
  </div>    
    </>
  )
}
