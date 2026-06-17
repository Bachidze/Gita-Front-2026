import { useEffect, useState } from 'react'
import './App.css'
import CounterButton from './Components/CounterButton'


//1) statelifting
// function App() {
//   const [count,setCount] = useState(0)
//   return (
//     <>
//      <CounterButton count={count} setCount={setCount}/>
//      <CounterButton count={count} setCount={setCount}/>
//     </>
//   )
// }

// export default App



// export default function App() {
//   useEffect(() => {
//     console.log("mounted component")
//   })
//   return (
//     <>
//     <h1>app</h1>
//     </>
//   )
// }


// import React from 'react'

// export default function App() {
//   const [number,setNumber] = useState(0)
//   console.log(number)
//   useEffect(() => {
//     console.log("render : mounted")
//     // setNumber(number + 1) წესი პირველი -> სთეითს არ ვსეტავთ useeffect-ში
//   })
//   return (
//     <>
//     <div>
//       <button onClick={() => {
//         setNumber(number + 1)
//       }}>render</button>
//     </div>
//     </>
//   )
// }


// export default function App() {
//   const [count,setCount] = useState(0)
//   const [number,setNumber] = useState(0)
//   console.log(`${count} : count`)
//   console.log(`${number} : number`)
//   useEffect(() => {
//     console.log("rerender")
//   },[count,number])
//   return (
//    <>
//    <div>

//     <button onClick={() => {
//       setCount(count + 1)
//     }}>rerender with count</button>


//     <button onClick={() => {
//       setNumber(number + 1)
//     }}>rerender with number</button>
//    </div>
//    </>
//   )
// }


// გამოიყენე useffect როცა count ის ველიუ გახდება 10 მაშინ გამოჩნდეს შენმა რენდერმა მიაღწია 10-ს

// export default function App() {
//   const [count,setCount] = useState(0)
//   console.log(count)
//   useEffect(() => {
//    console.log("mount")
//    if(count === 10){
//     console.log("რენდერმა მიაღწია 10-ს")
//    }
//   },[count])
//   return (
//     <>
//     <div>
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>increase num</button>
//     </div>
//     </>
//   )
// }

// import React from 'react'
// import ChildComponent from './Components/ChildComponent'

// export default function App() {
//   const [number,setNumber] = useState(0)
//   return (
//     <>
//     <div>
//       <ChildComponent number={number} />
//       <button onClick={() => {
//         setNumber(number + 1)
//       }}>increase {number}</button>
//     </div>
//     </>
//   )
// }

// import React from 'react'
// import ChildComponent from './Components/ChildComponent'

// export default function App() {
//   const [number,setNumber] = useState(0)
//   const [isvisble,setIsVisible] = useState(true)
//   return (
//     <>
//     <div>

//       {isvisble ? <ChildComponent number={number}/>: null}

//       <button onClick={() => {
//         setNumber(number + 1)
//       }}>increase {number}</button>

//       <button onClick={() => {
//         setIsVisible(!isvisble)
//       }}>{isvisble ? "un":""}mount Component</button>
//     </div>
//     </>
//   )
// }


import React from 'react'
import { products } from './products'
import ProductsCArd from './Components/ProductsCArd'

export default function App() {
  const [cardCount,setCardCount] = useState(0)
  const handleAddToCrd = () =>{
    setCardCount(prev => prev + 1)
  }

  return (
    <div>
      <header>
        <h1>ეს არის ჩვენი მაღაზია</h1>
        კალათა: <span>{cardCount}</span>
      </header>
      <main>
        {
          products.map((products) => (
            <ProductsCArd 
            key={products.id}
            product={products}
            onAddtoCard={handleAddToCrd}
            />
          ))
        }
      </main>
    </div>
  )
}






