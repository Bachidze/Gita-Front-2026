import './App.css'
import { arc, motion, useAnimate, useMotionValue } from "motion/react"
import { useRef, useState, type CSSProperties } from "react"
// function App() {

//   return (
//     <>
//     <section className='flex justify-center items-center h-screen flex-col gap-5'>


//     <motion.div
//     initial={{y:930}}
//     animate={{y:0}}
//     transition={{duration:1.2,ease:"easeOut"}}
//     className='p-6 bg-[red] max-w-sm rounded-xl shadow-lg overflow-hidden'>
//       <motion.h3 
//       initial={{x:"-100%"}}
//       animate={{x:0}}
//       transition={{duration:1.8}}
//       className='font-bold text-xl relative'>გამარჯობა</motion.h3>
//       <motion.p 
//        initial={{x:"-200%"}}
//        animate={{x:0}}
//        transition={{duration:3}}
//       className='text-bold mt-2 relative'>ეს ბარათი ქვემდოან ზემოთ ადის</motion.p>
//     </motion.div>

//     <motion.div
//     initial={{y:1130}}
//     animate={{y:0}}
//     transition={{duration:1.4,ease:"easeOut"}}
//     className='p-6 bg-[red] max-w-sm rounded-xl shadow-lg overflow-hidden'>
//      <motion.h3 
//       initial={{x:"-100%"}}
//       animate={{x:0}}
//       transition={{duration:2}}
//       className='font-bold text-xl relative'>გამარჯობა</motion.h3>
//       <motion.p 
//        initial={{x:"-220%"}}
//        animate={{x:0}}
//        transition={{duration:3.2}}
//       className='text-bold mt-2 relative'>ეს ბარათი ქვემდოან ზემოთ ადის</motion.p>
//     </motion.div>

//     <motion.div
//     initial={{y:1330}}
//     animate={{y:0}}
//     transition={{duration:1.6,ease:"easeOut"}}
//     className='p-6 bg-[red] max-w-sm rounded-xl shadow-lg overflow-hidden'>
//    <motion.h3 
//       initial={{x:"-120%"}}
//       animate={{x:0}}
//       transition={{duration:2.2}}
//       className='font-bold text-xl relative'>გამარჯობა</motion.h3>
//       <motion.p 
//        initial={{x:"-240%"}}
//        animate={{x:0}}
//        transition={{duration:3.4}}
//       className='text-bold mt-2 relative'>ეს ბარათი ქვემდოან ზემოთ ადის</motion.p>
//     </motion.div>

//     <motion.div
//     initial={{y:1530}}
//     animate={{y:0}}
//     transition={{duration:1.8,ease:"easeOut"}}
//     className='p-6 bg-[red] max-w-sm rounded-xl shadow-lg overflow-hidden'>
//        <motion.h3 
//       initial={{x:"-160%"}}
//       animate={{x:0}}
//       transition={{duration:2.4}}
//       className='font-bold text-xl relative'>გამარჯობა</motion.h3>
//       <motion.p 
//        initial={{x:"-260%"}}
//        animate={{x:0}}
//        transition={{duration:3.6}}
//       className='text-bold mt-2 relative'>ეს ბარათი ქვემდოან ზემოთ ადის</motion.p>
//     </motion.div>

//     <motion.div
//     initial={{y:1730}}
//     animate={{y:0}}
//     transition={{duration:2,ease:"easeOut"}}
//     className='p-6 bg-[red] max-w-sm rounded-xl shadow-lg overflow-hidden'>
//        <motion.h3 
//       initial={{x:"-200%"}}
//       animate={{x:0}}
//       transition={{duration:2.8}}
//       className='font-bold text-xl relative'>გამარჯობა</motion.h3>
//       <motion.p 
//        initial={{x:"-300%"}}
//        animate={{x:0}}
//        transition={{duration:3.6}}
//       className='text-bold mt-2 relative'>ეს ბარათი ქვემდოან ზემოთ ადის</motion.p>
//     </motion.div>


//     </section>
//     </>
//   )
// }

// export default App



// import React from 'react'

// export default function App() {
//   return (
//     <>
//       <div className=' w-[95%] bg-white h-full m-auto my-16 py-[150px] overflow-hidden flex flex-col gap-10'>


//       <motion.div
//       initial={{x:"-100%"}}
//       whileInView={{x:0}}
//       transition={{duration:1.5,ease:"easeInOut"}}
//       className='w-[80%] h-[300px] m-auto bg-[red] flex justify-center items-center rounded-3xl'> 
//        <h1 className='text-2xl font-bold'>1</h1>
//       </motion.div>

//       <motion.div
//       initial={{x:"100%"}}
//       whileInView={{x:0}}
//       transition={{duration:1.5,ease:"easeInOut"}}
//       className='w-[80%] h-[300px] m-auto bg-[blue] flex justify-center items-center rounded-3xl'> 
//        <h1 className='text-2xl font-bold'>2</h1>
//       </motion.div>

//       <motion.div
//       initial={{x:"-100%"}}
//       whileInView={{x:0}}
//       transition={{duration:1.5,ease:"easeInOut"}}
//       className='w-[80%] h-[300px] m-auto bg-[red] flex justify-center items-center rounded-3xl'> 
//        <h1 className='text-2xl font-bold'>3</h1>
//       </motion.div>

//       <motion.div
//       initial={{x:"100%"}}
//       whileInView={{x:0}}
//       transition={{duration:1.5,ease:"easeInOut"}}
//       className='w-[80%] h-[300px] m-auto bg-[blue] flex justify-center items-center rounded-3xl'> 
//        <h1 className='text-2xl font-bold'>4</h1>
//       </motion.div>
      
//       <motion.div
//       initial={{x:"-100%"}}
//       whileInView={{x:0}}
//       transition={{duration:1.5,ease:"easeInOut"}}
//       className='w-[80%] h-[300px] m-auto bg-[red] flex justify-center items-center rounded-3xl'> 
//        <h1 className='text-2xl font-bold'>5</h1>
//       </motion.div>

//       <motion.div
//       initial={{x:"100%"}}
//       whileInView={{x:0}}
//       transition={{duration:1.5,ease:"easeInOut"}}
//       className='w-[80%] h-[300px] m-auto bg-[blue] flex justify-center items-center rounded-3xl'> 
//        <h1 className='text-2xl font-bold'>6</h1>
//       </motion.div>

//       <motion.div
//       initial={{x:"-100%"}}
//       whileInView={{x:0}}
//       transition={{duration:1.5,ease:"easeInOut"}}
//       className='w-[80%] h-[300px] m-auto bg-[red] flex justify-center items-center rounded-3xl'> 
//        <h1 className='text-2xl font-bold'>7</h1>
//       </motion.div>

//       <motion.div
//       initial={{x:"100%"}}
//       whileInView={{x:0}}
//       transition={{duration:1.5,ease:"easeInOut"}}
//       className='w-[80%] h-[300px] m-auto bg-[blue] flex justify-center items-center rounded-3xl'> 
//        <h1 className='text-2xl font-bold'>8</h1>
//       </motion.div>



//       </div>    
//     </>
//   )
// }




// import React from 'react'

// export default function App() {
//   return (
//     <>
//     <motion.button
//     whileHover={{ scale:1.5}}
//     whileTap={{scale:3}}
//      className=' px-6 py-3 bg-[red] rounded-full w-[150px] h-[150px] mt-[300px] ml-[400px] cursor-pointer'>
//       დააჭირე და გაიზრდება
//     </motion.button>
//     </>
//   )
// }


// import React from 'react'

// export default function App() {
//   return (
//   <>

//   <motion.div
//   drag
//   dragConstraints={{left:-100, right:700, top:-50, bottom:50}}
//   className='w-40 h-40 bg-[red] text-white flex items-center justify-center rounded-full cursor-grab font-bold text-center p-5'
//   >
//     ხელი მომკიდე და გადამწიე
//   </motion.div>


//   </>
//   )
// }



/**
 * ==============   Constants   ================
 */

const PRODUCT_SIZE = 160
const BASKET_BOX = 56
const FLY_SCALE = BASKET_BOX / PRODUCT_SIZE

type Direction = "auto" | "cw" | "ccw"

interface AddToBasketProps {
  strength?: number
  peak?: number
  rotate?: number
  duration?: number
  basketVelocityFactor?: number
  direction?: Direction
}

/**
 * ==============   Components   ================
 */

export default function AddToBasket({
  strength = 0.5,
  peak = 0.15,
  rotate = 0.9,
  duration = 0.45,
  basketVelocityFactor = 0.05,
  direction = "cw",
}: AddToBasketProps = {}) {
  const [scope, animate] = useAnimate()
  const productRef = useRef<HTMLDivElement>(null)
  const basketRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isFlying, setIsFlying] = useState(false)
  const productX = useMotionValue(0)
  const productY = useMotionValue(0)

  const addToBasket = async () => {
    const product = productRef.current
    const basket = basketRef.current
    const ring = ringRef.current
    if (!product || !basket || !ring || isFlying) return
    setIsFlying(true)

    const from = product.getBoundingClientRect()
    const to = basket.getBoundingClientRect()
    const dx = to.left + to.width / 2 - (from.left + from.width / 2)
    const dy = to.top + to.height / 2 - (from.top + from.height / 2)

    // Fly into the basket, shrinking to its size, then clip it away right
    // at the end so it disappears into the basket.
    await animate(
      product,
      {
        x: dx,
        y: dy,
        scale: FLY_SCALE,
        opacity: [1, 1, 0],
      },
      {
        duration,
        path: arc({
          strength,
          peak,
          rotate,
          direction: direction === "auto" ? undefined : direction,
        }),
        ease: [0.74, 0.18, 0.93, 0.69],
        opacity: { inherit: true, times: [0, 0.95, 1] },
      },
    )

    // Knock the basket up and to the right with an explicit impact
    // velocity, then let a spring settle it back to rest.
    animate(
      basket,
      { x: 0, y: 0 },
      {
        type: "spring",
        stiffness: 500,
        damping: 12,
        x: {
          inherit: true,
          velocity: productX.getVelocity() * basketVelocityFactor,
        },
        y: {
          inherit: true,
          velocity: productY.getVelocity() * basketVelocityFactor,
        },
      },
    )

    // Ripple an outline out from the basket as it takes the hit.
    animate(
      ring,
      { scale: [1, 2.2], opacity: [0.8, 0] },
      { duration: 0.5, ease: "easeOut" },
    )

    // Snap the now-invisible product back to its resting spot, ready to
    // reappear.
    animate(
      product,
      {
        x: 0,
        y: 0,
        scale: 0.9,
        rotate: 0,
        opacity: 0,
        clipPath: "inset(0%)",
      },
      { duration: 0 },
    )

    // Bring a fresh product back into view, scaling in with a slight bounce.
    await animate(
      product,
      { opacity: 1, scale: 1 },
      {
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.35 },
        opacity: { duration: 0.25, ease: "easeOut" },
      },
    )

    setIsFlying(false)
  }

  return (
    <div ref={scope} style={stage}>
      <div ref={basketRef} style={basket}>
        <motion.div ref={ringRef} style={ring} />
        <BasketIcon />
      </div>

      <div style={center}>
        <motion.div
          ref={productRef}
          style={{ ...product, x: productX, y: productY }}
        >
          <span style={glyph}>👟</span>
        </motion.div>

        <div style={meta}>
          <span style={name}>Campus 00s</span>
          <span style={price}>£128</span>
        </div>

        <motion.button
          type="button"
          onClick={addToBasket}
          disabled={isFlying}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            ...button,
            opacity: isFlying ? 0.55 : 1,
            pointerEvents: isFlying ? "none" : "auto",
          }}
        >
          Add to basket
        </motion.button>
      </div>
    </div>
  )
}

function BasketIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 11-1 9" />
      <path d="m19 11-4-7" />
      <path d="M2 11h20" />
      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
      <path d="M4.5 15.5h15" />
      <path d="m5 11 4-7" />
      <path d="m9 11 1 9" />
    </svg>
  )
}

/**
 * ==============   Styles   ================
 */

const stage: CSSProperties = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  fontFamily: "var(--font-mono)",
  color: "var(--foreground)",
}

const basket: CSSProperties = {
  position: "absolute",
  top: 80,
  right: 80,
  width: BASKET_BOX,
  height: BASKET_BOX,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--layer)",
  border: "1px solid var(--border)",
  color: "var(--accent)",
  willChange: "transform",
}

const ring: CSSProperties = {
  position: "absolute",
  inset: -1,
  border: "1px solid var(--accent)",
  opacity: 0,
  pointerEvents: "none",
  willChange: "transform, opacity",
}

const center: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 18,
}

const product: CSSProperties = {
  width: PRODUCT_SIZE,
  height: PRODUCT_SIZE,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--layer)",
  border: "1px solid var(--border)",
  willChange: "transform, opacity, clip-path",
}

const glyph: CSSProperties = {
  fontSize: 84,
  lineHeight: 1,
  userSelect: "none",
}

const meta: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: 12,
  fontFamily: "var(--font-mono)",
  fontSize: 13,
  letterSpacing: "0.04em",
}

const name: CSSProperties = {
  color: "var(--foreground)",
}

const price: CSSProperties = {
  color: "var(--accent)",
}

const button: CSSProperties = {
  marginTop: 4,
  padding: "13px 26px",
  border: "none",
  background: "var(--accent)",
  color: "var(--background)",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  cursor: "pointer",
}

