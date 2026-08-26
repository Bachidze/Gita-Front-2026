import Link from 'next/link'
import React from 'react'

const products = [
    {
        id:1,
        name:"iphone"
    },
    {
        id:2,
        name:"samsung"
    },
    {
        id:3,
        name:"Nokia"
    },
    {
        id:4,
        name:"macbook"
    },
    {
        id:5,
        name:"thinkpad"
    },
    {
        id:6,
        name:"skami"
    }
]

export default function Products() {

  return (
    <>
    <div className='flex justify-center h-screen items-center'>
        {products.map((products) => (
            <div key={products.id} className='bg-[red] w-[250px] h-auto'>
                <Link href={`/products/${products.id}`}>{products.name}</Link>
            </div>
        ))}
    </div>
    </>
  )
}
