"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../validators/signup";
import Link from "next/link";
import {setCookie} from "cookies-next"
import axios from "axios"
import { useRouter } from "next/navigation";
import { SignInSchema } from "../validators/signin";
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });


  const router = useRouter()

  async function OnSubmit(data:any) {
    try {
        const res = await axios.post("http://localhost:3030/auth/sign-in",data)
        if(res.status === 200){
            setCookie("accesstoken",res.data.data,{maxAge:60*60})
            router.push("/dashboard")
        }
    } catch (error) {
        console.log(error,"ეს ეროროი მოდის sign-up-დან")
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen text-white">
        <form onSubmit={handleSubmit(OnSubmit)} className="bg-black w-100 h-auto rounded-2xl p-4 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-xl p-4 text-white outline-none"
            {...register("email")}
          />
          <p className="text-[red]">{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Password"
            className="border rounded-xl p-4 text-white outline-none"
            {...register("password")}
          />
          <p className="text-[red]">{errors.password?.message}</p>

          <button className=" w-full bg-white">signUP</button>

          <div className="flex justify-center gap-4 bg-white text-black p-4 rounded-xl">

            <span>do you have account ?</span>
            <Link href={"/sign-up"} className="text-blue-700">SignUp</Link>
          </div>
        </form>
      </div>
    </>
  );
}
