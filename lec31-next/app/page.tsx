"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [counter,setCounter] = useState(0)
  return (
   <>
   <button onClick={() => {
    setCounter(counter + 1)
   }} className="w-75 h-37.5 bg-[red] text-[#ffffff]">increase</button> 
   {counter}
   </>
  );
}
