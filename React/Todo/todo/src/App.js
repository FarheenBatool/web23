import { useState,useEffect, useRef } from 'react';
import List from './components/List';


function App() {
   const [count,setCount]= useState(0)
   const [todo,setTodo]= useState('')
   const [list,setList]= useState([])
   const countRef = useRef(0)

   function addList(){
    setList((prevlist)=> [...prevlist,todo])
    setTodo('')

    }
   
   

   useEffect(() => {
    //setCount(prevCount => prevCount+1) 
    // render hota ha , state update hoti h , state update ha phr useEffect render hota , infinite loop
    countRef.current = countRef.current + 1
   })
   
   function Decrement() {
    // this works
    setCount(prevCount => prevCount -1) 
    setCount(prevCount => prevCount -1)

    
   }
   function Increment(){
    // this does not
    // here it is just over riding , count is the value when we render the function 2 plus 1 3 , again 2 plus 1 is three
    setCount(count + 1)
    setCount(count + 1)

   }
  return (
  <>
  {/* <button onClick={Decrement}>-</button>
  <span>{count}</span>
  <button onClick={Increment}>+</button> */}
  {/* <div>
  <List/>
  <button>Edit</button>
  <button>Delete </button>

  </div>
  <input placeholder='Enter Text'/>
  <button>Add</button> */}

  <input placeholder='Enter Todo' value={todo} onChange={e => setTodo(e.target.value)}/>
  {/* <div>My name is {name}</div>
  <div>Rerender {countRef.current}</div> */}
  <button onClick={addList}>Add</button>
  <List list = {list}/>

  </>
  );
}


export default App;
