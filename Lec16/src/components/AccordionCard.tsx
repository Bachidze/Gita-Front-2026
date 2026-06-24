import { useState } from "react"
import AccordionItem from "./AccordionItem"
import { items } from "../items"
import styles from "./AccordionCard.module.css"


export default function AccordionCard() {
    const [activeAccordionNumber,setActiveAccordionNumber] = useState<number | null>(2)
    function handleClick(accordionNumber:number){
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
