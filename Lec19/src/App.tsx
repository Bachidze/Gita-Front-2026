// import { useEffect, useRef } from 'react'
// import './App.css'

import { useReducer, useState } from "react"

// function App() {
//   const firstRender = useRef(true)
//   useEffect(() => {
//     if(firstRender.current){
//       console.log("დამაუნთება")
//       firstRender.current = false
//     }
//   },[])

//   return (
//     <>

//     </>
//   )
// }

// export default App



// import { useEffect, useRef, useState } from 'react'
// import './App.css'

// function App() {
//   const [test,setTest] = useState(true)
//   // const firstRender = useRef(true)
//   useEffect(() => {
//     if(test){
//       console.log("დამაუნთება")
//       setTest(false)
//     }
//   },[])

//   return (
//     <>

//     </>
//   )
// }

// export default App



// const App = () => {

// function reducer(state,action){
//   if(action.type === "increment"){
//     return{
//       age:state.age+ 1
//     }
//   }
// }

//   const [state,dispatch] = useReducer(reducer,{age:42})

//   return (
//    <>
//    <button onClick={() => {
//     dispatch({type:"increment"})
//    }}>increase</button>
//    <h1>age:{state.age}</h1>
//    </>
//   )
// }

// export default App


/// complex obj with useState

// const App = () => {

//   const [user,setUser] = useState({
//     userName:"gio12",
//     age:22,
//     posts:[{title:"assadada"},{},{}],
//     likedPosts:[{},{}],
//     photos:[{}],
//     address:{
//       home:{
//         street:"chavchavadze",
//         building:12,
//       },
//       work:{
//         street:"chavchavadze",
//         building:12,
//       }
//     }
//   })

//   console.log(user)
//   return (
//   <>
//   <button onClick={() => {
//     setUser({...user,address:{...user.address,work:{...user.address.work,street:"dolidze"}}})
//   }}>update street</button>
//   </>
//   )
// }

// export default App

const App = () => {

  //reducer example

  const initialState  = {
      userName:"gio12",
      age:22,
      posts:[{title:"assadada"},{},{}],
      likedPosts:[{},{}],
      photos:[{}],
      address:{
        home:{
          street:"chavchavadze",
          building:12,
        },
        work:{
          street:"chavchavadze",
          building:12,
        }
      }
    }

  const [user,dispatch] = useReducer(reducer,initialState)

        function reducer(state,action){
          switch(action.type){
            case "update":
              return{
                ...state,
                address:{
                  ...state.address,
                  work:{
                    ...state.address.work,
                    street:action.payload
                  }
                }
              }
              default:
                return state
          }
        }

//usestate example 
  // const [user,setUser] = useState({
  //   userName:"gio12",
  //   age:22,
  //   posts:[{title:"assadada"},{},{}],
  //   likedPosts:[{},{}],
  //   photos:[{}],
  //   address:{
  //     home:{
  //       street:"chavchavadze",
  //       building:12,
  //     },
  //     work:{
  //       street:"chavchavadze",
  //       building:12,
  //     }
  //   }
  // })

  // function updateWorkStreet(newAddress){
  //   setUser({...user,address:{...user.address,work:{...user.address.work,street:newAddress}}})
  // }

  console.log(user)
  return (
  <>
  <button onClick={() => {
    // updateWorkStreet("აბაშიძე")
    dispatch({
      type:"update",
      payload:"ნუცუბიძე"
    })
  }}>update street</button>
  </>
  )
}

export default App