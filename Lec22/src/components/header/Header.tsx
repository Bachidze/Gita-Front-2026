import React from 'react'
import huddleLogo from "../../assets/gitaLogo.svg"
import { easeOut, motion } from "framer-motion"
export default function Header() {
  return (
    <>
    <header className='pt-6 w-[87%] m-auto max-w-[1440px]'>
        <section className='flex items-center justify-between'>
        <motion.div
        initial={{x:"-100%"}}
        whileInView={{x:0}}
        transition={{duration:3.5,ease:easeOut}}
        data-cursor-grow>
            <img src={huddleLogo} alt="huddleLogo" />
        </motion.div>
        <motion.div
        initial={{x:"100%"}}
        whileInView={{x:0}}
        transition={{duration:1.5,ease:easeOut}}
        >
            <button data-cursor-grow className='text-[12px] text-[#FF52C1] border border-[#FF52C1] rounded-xl px-[24px] py-[6px]'>Try It Free</button>
        </motion.div>
        </section>
    </header>
    </>
  )
}
