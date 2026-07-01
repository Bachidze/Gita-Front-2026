// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count,setCount] = useState(0)
//   let num = 5

//   console.log("რენდერის ლოგი",num)
//   return (

//     <>

//     <h1>{count}</h1>

//     <button onClick={() => {
//       num=10
//       console.log("რაც შევცვალეთ",num)
//       setCount(count + 1)
//     }}>increase</button>

//     </>
//   )
// }

// export default App



//useRef

// import { useRef, useState } from 'react'
// import './App.css'

// function App() {
//   const [count,setCount] = useState(0)

//   const ref = useRef(1)
//   console.log(ref)
//   console.log("რენდერის ლოგი",ref.current)
//   return (

//     <>

//     <h1>{count}</h1>

//     <button onClick={() => {
//      ref.current = 10
//       console.log("რაც შევცვალეთ",ref.current)
//       setCount(prev => prev + 1)
//     }}>increase</button>

//     </>
//   )
// }

// export default App


//// useCase

// import { useRef} from 'react'
// import './App.css'

// function App() {

//   const buttonRef = useRef<any>(null)

//   return (

//     <>

//     <button ref={buttonRef} onClick={() => {
//       console.log("დაეჭირა პირველს")
//     }}>button 1</button>

//     <button onClick={() => {
//       console.log("დაეჭირა მეორეს")
//       buttonRef.current.click()
//       buttonRef.current.style.backgroundColor = "red"
//     }}>button 2</button>
//     </>
//   )
// }

// export default App


// import { useRef } from 'react'

// let vidoURL = "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f3/Big_Buck_Bunny_first_23_seconds_1080p.ogv/Big_Buck_Bunny_first_23_seconds_1080p.ogv.480p.vp9.webm"

// export default function App() {
//   const videoRef = useRef<HTMLVideoElement | null>(null)

//   return (
//     <>
//       <video ref={videoRef} controls>
//         <source src={vidoURL} type='video/webm' />
//       </video>
//       <button
//         onClick={() => {
//           const video = videoRef.current
//           if (!video) return // videoRef.current გააჩერე

//           if (video.paused) { // videoRef.currnet.paused
//             video.play() // videoRef.current.play()
//           } else {
//             video.pause() //videoRef.currnet.paused
//           }
//         }}
//       >
//         Play/Pause
//       </button>
//     </>
//   )
// }



/// useContext



import { createContext, useState, type Dispatch, type SetStateAction } from 'react'
import ChildComponent from './components/ChildComponent'

type MyContextType = {
  name: string
  setName: Dispatch<SetStateAction<string>>
}

export const MyContext = createContext<MyContextType | null>(null)
export default function App() {
  const [name, setName] = useState<string>('nika')

  return (
    <>
      <MyContext.Provider value={{ name, setName }}>
        <h1>this is parent</h1>
        <ChildComponent />

        <button onClick={() => {
          setName("luka")
        }}>change name</button>
      </MyContext.Provider>
    </>
  )
}

