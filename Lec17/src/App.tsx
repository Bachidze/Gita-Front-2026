import { useEffect, useState } from 'react'
import './App.css'
import type { IUser } from './interfaces'
import axios from "axios"

// interface IUser{
//   name:string,
//   id:number
// }

// function App() {
//   const [users,setUsers] = useState<IUser[]>([])

//   async function FetchUsers(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     setUsers(data)
//   }

//   useEffect(() => {
//     // fetch("https://jsonplaceholder.typicode.com/users")
//     // .then(res => res.json())
//     // .then(data => setUsers(data))
//     FetchUsers()
//   },[])

//   return (
//     <>
//      {
//       users.map(user => (
//         <div key={user.id}>
//           {user.name}
//         </div>
//       ))
//      }
//     </>
//   )
// }

// export default App




function App() {
  const [users,setUsers] = useState<IUser[]>([])
  
  async function FetchUsers(){
    let res = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(res.data)
  }

  useEffect(() => {
    FetchUsers()
  },[])

  return (
    <>
     {
      users.map(user => (
        <div key={user.id}>
          {user.name}
        </div>
      ))
     }
    </>
  )
}

export default App