import { useState,useEffect, useRef } from 'react';
import List from './components/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

import "./App.css"


function App() {
  //  const [count,setCount]= useState(0)
   const [todo,setTodo]= useState('')
   const [list,setList]= useState([])
   const countRef = useRef(0)

   function addList(){
    setList((prevlist)=> [...prevlist,{id:uuidv4(),name:todo,completed:false}])
    setTodo('')
    console.log(list)
    }
    const updateList = (newList) => {
      setList(newList);
    };
  
   
   

  //  useEffect(() => {
  //   //setCount(prevCount => prevCount+1) 
  //   // render hota ha , state update hoti h , state update ha phr useEffect render hota , infinite loop
  //   countRef.current = countRef.current + 1
  //  })
   
  //  function Decrement() {
  //   // this works
  //   setCount(prevCount => prevCount -1) 
  //   setCount(prevCount => prevCount -1)
  //  }

  //  function Increment(){
  //   // this does not
  //   // here it is just over riding , count is the value when we render the function 2 plus 1 3 , again 2 plus 1 is three
  //   setCount(count + 1)
  //   setCount(count + 1)

  //  }
  return (
  <>
  <div className='head'>
  <h2 style={{color:'black'}}>Enter Todo's</h2>
  <div>
  <input type='text' placeholder='Enter Todo' value={todo} onChange={e => setTodo(e.target.value)}/>
  <FontAwesomeIcon className='icon' icon={faPlus} onClick={addList} />
  </div>
  <List list = {list} updateList={updateList}/>

  </div>

 

  </>
  );
}


export default App;
