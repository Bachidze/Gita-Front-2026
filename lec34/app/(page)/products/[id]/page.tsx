import React from 'react'

export  default async function Id({params}:any) {
    const {id} = await params
  return (
    <div>product id: {id}</div>
  )
}
