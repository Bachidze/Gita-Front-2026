import { useParams } from 'react-router-dom'


const questions = [
    {
        id:"1",
        title:"რა არის რეაქთი?",
        answer:"ეს არის ჯავასკრიპტის ბიბლიოთეკა"
    },
    {
        id:"2",
        title:"რა არის useState?",
        answer:"ეს არის რეაქთის ჰუკი."
    },
    {
        id:"3",
        title:"რა არის useEffect",
        answer:"ეს არის რეზქთის ჰუკი რომელიც ჰენდლასვ ასნიქრონულობას"
    },
]

export default function QuestionsPage() {

    let {id} = useParams()

    const qusetion = questions.find((el) => el.id === id)

    if(!qusetion){
        return <h2>Question not foun</h2>
    }
    
  return (
    <>
    <div>{qusetion.title}</div>
    <div>{qusetion.answer}</div>
    </>
  )
}
