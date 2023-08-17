import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck} from '@fortawesome/free-regular-svg-icons';


import '../App.css'

export default function List(props) {
  const [updatelist , setUpdatelist]= useState([]) 

  // console.log("hi",updatelist)

  useEffect(() => {
    setUpdatelist(props.list);
  }, [props.list]);

   function done(index){
    // const doneTodo =[...updatelist]
    // const todo = doneTodo.find(todo => todo.id === index)
    // todo.completed = !todo.completed
    const updatedList = updatelist.map(todo => {
      if (todo.id === index) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setUpdatelist(updatedList)
    props.updateList(updatedList)
  }
  
  function del(index) {
    const newList = updatelist.filter(todo => todo.id !== index);
    setUpdatelist(newList);
    props.updateList(newList);

  }
  return (
    <ol>
      {updatelist.map((item, index) => (
        <>
        <div className='listDiv' >
        <li className={`li ${item.completed ? 'completed' : ''}`} key={item.id}>{item.name}</li>
        <div className='iconContainer'>
        <FontAwesomeIcon className='icon' icon={faTrash} onClick={() =>del(item.id)}  />
        <FontAwesomeIcon className='icon' icon={faCircleCheck} onClick={() =>done(item.id)}/>
        </div> 
        {/* <button onClick={() =>del(index)}>Delete</button> */}
        {/* <button onClick={done}>Complete</button> */}
       </div>
       
        </>
     
      ))}
    </ol>
  );
}
