import { useState } from "react"


function useInput(){
    const [value,setValue] = useState("")

    const handleChange = (event:any) =>{
        setValue(event.target.value)
    }

    return {value,handleChange}
}


export default  useInput