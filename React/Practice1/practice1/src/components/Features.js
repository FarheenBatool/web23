import React from 'react'
import Bar from './Bar';


export default function Features(props) {
  return (
    <>
    <Bar title="Text Utilss" mode={props.mode} toggle={props.toggle} /> 
    <div>Features
    </div></>
  )
}
