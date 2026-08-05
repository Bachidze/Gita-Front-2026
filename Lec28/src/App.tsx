// import React, { useState } from "react";

// export default function App() {
//   // დავალება 1 თქვენი მიზანია შექმნატ ერტი დივი 300x300 ზე და გქოდნეტ 1 ღილაკი როცა დააჭერთ ეს დივი უნდა გაქრეს როცა ისევ დაააჭერ ეს გამქრალი დივი უნდა გაჩნდეს.

//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setShow(!show);
//         }}
//       >
//         show/hidden
//       </button>

//       {show && <div className="w-[300px] h-[300px] bg-red-600">1</div>}
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function App() {
//   // 2 შექმენი ინფუთი და შიგნით ცაჭერილი ველიუ გამოაცინე დეშბორდზე
//   const [txt, setTxt] = useState("");
//   return (
//     <>
//       <input type="text" className="border"  onChange={(e) => setTxt(e.target.value)} />

//       <h1>{txt}</h1>
//     </>
//   );
// }


// import React from 'react'

// export default function App() {
//     //3 აიღეთ ერეი შიგნით ცაწერეტ ნებისმიეირ ინფორმაცია და მაპის მეშვეობით გამოაჩინეთ დეშბორდზე
//     const todoItems = [
//         "უნდა წავიდე სკოლაში",
//         "ვისწავლო რეაქთი",
//         "ვისწავლო ხელოვნური ინტელექტი"
//     ]
//   return (
//     <>
//     {
//         todoItems.map((el,index) => (
//             <div key={index}>
//                 {el}
//             </div>
//         ))
//     }
//     </>
//   )
// }


// import React, { useState } from 'react'

// export default function App() {
//     const [count,setCount] = useState(0)
//   return (
//     <>
//     <button onClick={()=> {
//         setCount(count - 1)
//     }}>decrease</button>
//     {count}
//     <button onClick={() => {
//         setCount(count + 1)
//     }}>increase</button>
//     </>
//   )
// }



import React, { useState } from 'react'

export default function App() {
    //5 შექმენი 2 ინფუთი 1 იყოს იმეილი მეორე პაროლი სანამ ეს ველებია რ შეივსება მანამდე არ აჩვენო logged successfully ეს ტექსტი

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loggedIn,setLoggedIn] = useState(false)

    function login(){
        if(email && password){
            setLoggedIn(true)
        }
    }

    if(loggedIn){
        return <h1>Logged in successfully</h1>
    }

  return (
    <>
    <div>
        <input type="email" className='border' placeholder='email' onChange={(e) => { setEmail(e.target.value)}} />
        <input type="password" className='border' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={login}>login</button>
    </div>
    </>
  )
}

