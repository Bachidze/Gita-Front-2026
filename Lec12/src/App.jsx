// import { useState } from "react";
// import "./App.css";
// import ChildComponent from "./Components/ChildComponent";

// function App() {
//   return (
//     <>
//       <h1>this is parent Component</h1>
//       <ChildComponent
//         name="nika"
//         age={22}
//         favoriteFoods={["mwvadi2", "xinkali3", "shaurma5"]}
//         images={{
//           weatherImage:
//             "https://fastly.picsum.photos/id/1019/200/300.jpg?hmac=HLUPqgTMOzQ6-GDkgZZ3NXQqJyl5m6iX_MXvS3Xqt3Q",
//           mountainsImage:
//             "https://fastly.picsum.photos/id/1018/300/600.jpg?hmac=ns5qLZ8WR2WHWJZerMf2hahPDm1Ok3D0hLtRbqUEG8o",
//         }}
//       />
//     </>
//   );
// }

// // function ChildComponent(props){
// //   console.log(props)
// //   return (
// //     <>
// //     <div>
// //       <h1>My name is {props.name} and my age is {props.age}</h1>
// //       <h2>my food is {props.favoriteFoods}</h2>
// //     </div>
// //     <div>
// //       <img src={props.images.weatherImage} alt="amindisfoto" />
// //       <img src={props.images.mountainsImage} alt="mtebisfoto" />
// //     </div>
// //     </>
// //   )
// // }

// export default App;


///////////////// dynamic className

// import React from 'react'
// import NameComponent from './Components/NameComponent'

// export default function App() {
//   return (
//    <>
//    <NameComponent name = "nika" />
//    <NameComponent name = "giorgi" chnageColor="chnageNameComponentBgColor"/>
//    <NameComponent name = "luka" />
//    </>
//   )
// }


////////////map


// import React from 'react'
// import NameComponent from './Components/NameComponent'

// export default function App() {
//   // let namesArr = ["nika","luka","nino"]
//   let namseArr2 = [
//     {id:1,name:"nika"},
//     {id:2,name:"luka"},
//     {id:3,name:"nino"},
//     {id:4,name:"nino"},
//   ]
//   return (
//     <>
//     {
//       namseArr2.map((el,index) => (
//         <div key={el.id}>
//           {/* {el.name} */}
//           <NameComponent name={el.name} chnageColor={index === 1 ? "chnageNameComponentBgColor" : ""}/>
//         </div>
//       ))
//     }
//     </>
//   )
// }



//////// eventListeners


// import React from 'react'

// export default function App() {
//   function handleOnChange(event){
//     console.log(event.target.value)
//   }
//   return (
//     <>
//     <div>
//       {/* <input type="text" onChange={(event) => {
//         console.log(event.target.value)
//       }}/> */}
//       {/* <input type="text" onMouseOver={() => {
//         console.log("მაუსი",Date())
//       }}/> */}
//       <input type="text" onChange={handleOnChange} />
//     </div>
//     </>
//   )
// }


///////// conditional rendering


import React from 'react'
import { useState } from 'react'

export default function App() {
  // let isDark = true
  let [isDark,setIsDark] = useState(true)
  return (
    <>
    {
      isDark ? <h1>it is dark</h1> : <h1>it is ligth</h1>
    }
    <button onClick={() => {
      // isDark = false
    //  setIsDark(!isDark)
    setIsDark(false)
    }}>make it ligth</button>
    </>
  )
}



