// import React, { useEffect } from 'react'

// export default function ChildComponent({number}) {
//     useEffect(() => {
//         console.log("component mounted")
//     },[number])
//   return (
//     <>
//     <h1>childComponent {number}</h1>
//     </>
//   )
// }


import React, { useEffect } from 'react'

export default function ChildComponent({number}) {
    useEffect(() => {
        console.log("mount")

        return () => {
            console.log("unmount")
        }

    },[])
  return (
   <>
   childComponent {number}
   </>
  )
}

