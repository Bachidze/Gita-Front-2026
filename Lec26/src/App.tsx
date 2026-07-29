import './App.css'

// type FormData = {
//   email:string;
//   name:string;
//   lastName:string
// }

// function App() {
// const {register,handleSubmit} = useForm<FormData>()

// function onSubmit(data:FormData){
//   console.log(data)
// }

//   return (
//     <>
//     <div className='flex justify-center h-screen items-center '>
//       <form onSubmit={handleSubmit(onSubmit)} className='bg-black text-white w-[400px] flex flex-col p-10 gap-4 rounded-xl'>

//         <input className='border rounded-xl p-4' type="text" placeholder='email' {...register("email")} />
//         <input className='border rounded-xl p-4' type="text" placeholder='name' {...register("name")}/>
//         <input className='border rounded-xl p-4' type="text" placeholder='surname' {...register("lastName")}/>

//         <button className='bg-white rounded-xl text-black p-4 cursor-pointer' type='submit'>Register</button>
//       </form>
//     </div>
//     </>
//   )
// }

// export default App





///// validaciaaa


// type FormData = {
//   email:string;
//   name:string;
//   lastName:string
// }

// function App() {
// const {register,handleSubmit,formState:{errors}} = useForm<FormData>()

// function onSubmit(data:FormData){
//   console.log(data)
// }

// console.log(errors)

//   return (
//     <>
//     <div className='flex justify-center h-screen items-center '>
//       <form onSubmit={handleSubmit(onSubmit)} className='bg-black text-white w-[400px] flex flex-col p-10 gap-4 rounded-xl'>

//         <input className='border rounded-xl p-4' type="text" placeholder='email' {...register("email",{ pattern: /^[A-Za-z]+$/i })} />
//         {errors.email && <p className='text-[red]'>რიცხვების გარეშე სცადე</p>}


//         {/* <input className='border rounded-xl p-4' type="text" placeholder='name' {...register("name",{ required: true })}/>
//         {errors.email && <p className='text-[red]'>name is required</p>}

//         <input className='border rounded-xl p-4' type="text" placeholder='surname' {...register("lastName",{ required: true })}/>
//         {errors.email && <p className='text-[red]'>lastName is required</p>} */}
//         <button className='bg-white rounded-xl text-black p-4 cursor-pointer' type='submit'>Register</button>
//       </form>
//     </div>
//     </>
//   )
// }

// export default App



//// numbe rspace  ___ ____ ____ __  4444 4444  444  444


import {IMaskInput} from "react-imask"
export default function App() {
  return (
    <>
    <div className="flex flex-col gap-4 p-5 w-[800px]">
      <label className='text-[25px]'>CARD</label>
    <IMaskInput 
    mask="0000 0000 0000 0000"
    lazy={false}
    placeholderChar='_'
    onAccept={(value) => {
      console.log(value,"inputMask")
    }}
    className='w-full p-5 rounded-xl border-2 outline-none font-mono tracking-[28px]'
    />
    </div>
    </>
  )
}
