
import './App.css'


//1) component + props
// function App() {
//   return (
//     <>
//    <ChildComponent name="nino" age={22}/>
//    <ChildComponent name="giorgi"/>
//    <ChildComponent name="mariami"/>
//     </>
//   )
// }

// export default App



//2) usestate
// import React, { useState } from 'react'

// export default function App() {
//   const [count,setCount] = useState(0)
//   return (
//     <>
//     <h1>{count}</h1>
    
//     <button onClick={() => {
//     //  setCount(count => count + 1)
//     //  setCount(count => count + 2)
//     //  setCount(count => count + 3)
//     //  setCount(count => count + 4)
//      setCount(count + 1)
//      setCount(count + 2)
//      setCount(count + 3)
//      setCount(count + 4)
//     }}>Count UP</button>

//     <button onClick={() => {
//       setCount(count - 1)
//     }}>Count Down</button>


//     <button onClick={() => {
//       setCount(0)
//     }}>reset</button>
//     </>
//   )
// }

// //Taks დაამატეთ countDown და Reset

// import React, { useState } from 'react'
// import CounterButton from './Components/CounterButton'

// export default function App() {
//   const [count,setCount] = useState(0)
//   return (
//     <>
//     <CounterButton count={count} setCount={setCount} />
//     <CounterButton count={count} setCount={setCount}/>
//     </>
//   )
// }

//state lifitng

// import { useState } from 'react';

// export default function App() {
//     const [score, setScore] = useState(0);
 
//   return (
//     <div>
//       <Counter score={score} setScore={setScore} />
//       <Counter score={score} setScore={setScore}/>
//     </div>
//   );
// }

// function Counter({score,setScore}) {
//   // const [score, setScore] = useState(0);
//   // const [hover, setHover] = useState(false);

//   let className = 'counter';

//   return (
//     <div
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

// დავალების ჰანხილვა
// import React, { use } from 'react'
// import UserCard from './Components/UserCard'
// import { users } from './User'

// export default function App() {
//   return (
//    <>
//    {
//      users.map((user) => (
//       <div key={user.id}>
//         <h1>users list</h1>
//         <UserCard  key={user.id} user={user}/>
//       </div>
//     ))
//    }
//    </>
//   )
// }


// import CounterButton from './Components/CounterButton'

// export default function App() {
//   return (
//     <>
//     <CounterButton/>
//     <CounterButton/>
//     </>
//   )
// }

import CounterButton from './Components/CounterButton'
export default function App() {
  return (
    <>
      <CounterButton />
      <CounterButton />
    </>
  )
}









