import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Features from './Features'
import  Id from './Id'
import NewId from './NewId'
import Notfound from './Notfound'

export default function NestedRoute(props) {
  return (
    <Routes>
    <Route index element={<Features mode={props.mode} toggle={props.toggle}/>}/>
    <Route path=':id' element={<Id/>}/>
    <Route path='new' element={<NewId/>}/>
    <Route path="/*" element={<Notfound/>}/> 


    </Routes>
  )
}
