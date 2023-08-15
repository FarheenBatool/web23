import React, { useState,useEffect } from 'react';

export default function List(props) {
  // const { list } = props.List;
  const [updatelist , setUpdatelist]= useState(props.list) 
  console.log(updatelist)
  function done(){

  }
  function del(index){
  const newList = updatelist.filter((item, i) => i !== index);
  setUpdatelist(newList)
  // console.log(newList); // Updated list without the deleted item
  // console.log(updatelist)
  }

  return (
    <ul>
      {updatelist.map((item, index) => (
        <>
        <li key={index}>{item}</li>
        <button onClick={() =>del(index)}>Delete</button>
        <button onClick={done}>Complete</button>
        </>
     
      ))}
    </ul>
  );
}
