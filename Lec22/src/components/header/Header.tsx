import React from 'react'
import huddleLogo from "../../assets/gitaLogo.svg"
export default function Header() {
  return (
    <>
    <header className='pt-6 w-[87%] m-auto max-w-[1440px]'>
        <section className='flex items-center justify-between'>
        <div className='cursor-pointer'>
            <img src={huddleLogo} alt="huddleLogo" />
        </div>
        <div>
            <button className='text-[12px] text-[#FF52C1] border border-[#FF52C1] rounded-xl px-[24px] py-[6px] cursor-pointer'>Try It Free</button>
        </div>
        </section>
    </header>
    </>
  )
}
