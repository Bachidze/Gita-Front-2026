// import React, { useState } from 'react'
// import styles from "./AccordionCard.module.css"

// export default function AccordionCard() {
//     const [isvisible,setIsVisible] = useState(false)
//     const [isvisible2,setIsVisible2] = useState(false)
//   return (
// <>
// {/* // <div className={`${styles.AccordionCard} ${true ? styles.fonrtFirst : styles.fontSecond}`}>AccordionCard</div> */}
// <main className={styles.AccordionCard}>
//     <div>
//         <h2 onClick={() => {
//             setIsVisible(!isvisible)
//         }}>
//             Accordion1
//         </h2>
//         {
//             isvisible ? <p> gitas studentebi </p> : null
//         }
//     </div>

//     <div>
//         <h2 onClick={() => {
//             setIsVisible2(!isvisible2)
//         }}>
//             Accordion2
//         </h2>
//         {
//             isvisible2 ? <p> gitas studentebi </p> : null
//         }
//     </div>

// </main>
// </>
//   )
// }

import React, { useState } from 'react'
import styles from "./AccordionCard.module.css"
import AccordionItem from './AccordionItem'
import { items } from '../items'

export default function AccordionCard() {
    const [activeAccordionNumber,setActiveAccordionNumber] = useState(2)
    function handleClick(accordionNumber){
        if(activeAccordionNumber === accordionNumber){
            setActiveAccordionNumber(null)
        }else{
            setActiveAccordionNumber(accordionNumber)
        }
    }
  return (
<>
<main className={styles.AccordionCard}>
    {
        items.map((el) => (
            <AccordionItem 
            handleClick={handleClick}
            title={el.title}
            desc ={el.desc}
            activeAccordionNumber={activeAccordionNumber}
            randomNum={el.randomNum}
            />
        ))
    }
</main>
</>
  )
}





