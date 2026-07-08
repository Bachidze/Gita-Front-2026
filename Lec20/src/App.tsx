// import EmblaCarousel from './components/EmblaCarousel'
// import './App.css'

// import { useEffect, useState } from "react"

// const slides = [
//   { id: 1, title: 'React', description: 'Learn React basics' },
//   { id: 2, title: 'TypeScript', description: 'Write safer code' },
//   { id: 3, title: 'Node.js', description: 'Build backend APIs' },
//   { id: 4, title: 'MongoDB', description: 'Store app data' },
//   { id: 5, title: 'Next.js', description: 'Build fullstack apps' },
// ]

// function App() {
//   return (
//     <main className="app">
//       <div className="app__content">
//         <h1>Courses Carousel</h1>
//         <p className="app__intro">
//           Swipe or use the buttons to move through the slides.
//         </p>

//         <EmblaCarousel slides={slides} />
//       </div>
//     </main>
//   )
// }

// export default App



// export default function App() {
//   const [giorgi,setGiorgi] = useState("")
//   return (
//     <>
//     <input onChange={(e) => {
//      setGiorgi(e.target.value)
//     }} type="text" placeholder="giorgi" />
//     {giorgi}
//     </>
//   )
// }

// import React from 'react'

// export default function App() {
//   const [bill,setBill] = useState(null)
//   const [tip,setTip] = useState(0)
//   const [people,setPeople] = useState(1)

//   const tipAmountPErPerson = (bill * tip) / people
//   const totalPerPerson = (bill + bill * tip) / people


//   useEffect(() => {
//     console.log("წარმატებით დამაუნთდა")
//   },[])

//   return (
//     <>
//     <div>
//       <label>Bill</label>
//       <input type="number" placeholder="0" value={bill} onChange={(e) => {
//         setBill(Number(e.target.value))
//       }} />
//     </div>

//     <div>
//       <p>select Tip %</p>
//       <button onClick={() => setTip(0.05)}>5%</button>
//       <button onClick={() => setTip(0.1)}>10%</button>
//       <button onClick={() => setTip(0.15)}>15%</button>
//       <button onClick={() => setTip(0.25)}>25%</button>
//       <button onClick={() => setTip(0.5)}>50%</button>
//     </div>

//     <div>
//       <label>number of people</label>
//       <input type="number" placeholder="1" value={people} onChange={(e) => {
//         setPeople(Number(e.target.value))
//       }} />
//     </div>

//     <div>
//       <h3>Tip Amount / PerPerson</h3>
//       <p>${tipAmountPErPerson.toFixed(2)}</p>
//     </div>

//     <div>
//       <h3>Total / PerPerson</h3>
//       <p>${totalPerPerson.toFixed(2)}</p>
//     </div>


//     <button onClick={() => {
//       setBill("")
//       setPeople(1)
//       setTip(0)
//     }}>Reset</button>
//     </>
//   )
// }



import React, { useRef, useState } from 'react'
import ChildComponent from './components/ChildComponent'

export default function App() {
  const [count,setCount] = useState(0)
  const renderCount = useRef(0)
  console.log("მშობლის რენდერი",renderCount.current++ )
  return (
    <>
    <div>
      <ChildComponent />
      
      <button onClick={() => {
        setCount(prev => prev + 1)
      }}>დარენდერება მშობლის</button>
    </div>
    </>
  )
}
