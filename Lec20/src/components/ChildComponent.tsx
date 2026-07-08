import React, { useRef } from 'react'

 function ChildComponent() {
    const renderCount = useRef(0)
  console.log("შვილის რენდერი",renderCount.current++ )
  return (
    <div>შვილი</div>
  )
}


export default React.memo(ChildComponent)