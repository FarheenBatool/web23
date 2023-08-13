import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Notfound() {
  const navv = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      // we have search params as well
      navv("/")
      // nav(-1) is going to take back
    },1000)
  },[])
  
  return (
      <h3>Notfound</h3>
    //  <Navigate to={"/"}/>
  )
}
