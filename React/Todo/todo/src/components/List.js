import React, { useState,useEffect } from 'react';

export default function List(props) {
  // const { list } = props.List;
  // console.log(props.list)
  const array = props.list
  console.log(array)
  const [updatelist , setUpdatelist]= useState(props.list) 
  console.log("hi",updatelist)
  useEffect(() => {
    setUpdatelist(props.list);
  }, [props.list]);
   function done(){

  }
  
  function del(index) {
    const newList = updatelist.filter((_, i) => i !== index);
    setUpdatelist(newList);
    props.updateList(newList);

  }
  //  useEffect(() => {
  //   if (props.list.length === 0) {
  //     setUpdatelist([]);
  //   }
  // }, [props.list]);
  
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
