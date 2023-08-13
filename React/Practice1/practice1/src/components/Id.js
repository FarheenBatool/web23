import React from 'react'
import { useParams } from 'react-router-dom'

export default function Id() {
 const {id} = useParams()
  return (
    <div>Id {id}</div>
  )
}
