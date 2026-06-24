

interface HandleAccordion{
  handleClick:(accordionNum:number) => void
  activeAccordionNumber:number | null,
  randomNum:number,
  title:string,
  desc:string
}

export default function AccordionItem({handleClick,activeAccordionNumber,randomNum,title,desc}:HandleAccordion) {
  return (
  <>
    <div>
        <h2 onClick={() => {handleClick(randomNum)}}>
            {title}
        </h2>
        {
            activeAccordionNumber === randomNum ? <p>{desc}</p> : null
        }
    </div>
  </>
  )
}