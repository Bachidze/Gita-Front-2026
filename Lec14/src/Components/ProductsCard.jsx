import React from 'react'

export default function ProductsCArd({product,onAddtoCard}) {
    const {id,title,price,category} = product
  return (
   <>
   <div>
    <span>{category}</span>
    <h3>{title}</h3>
    <p>ფასი:{price}</p>
   </div>
   <div>
    <button onClick={onAddtoCard}>add to card</button>
   </div>
   </>
  )
}
