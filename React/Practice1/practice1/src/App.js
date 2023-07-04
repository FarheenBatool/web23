import React,{useState} from 'react'
import './App.css';
import Bar from './components/Bar';
import TextArea from './components/TextArea';


function App() {
  const [mode,setMode]= useState("light")
  function toggle(){
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor= "black"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor= "white"

    }
  }
  return (
    <>
    <div className='container' style={{color:mode==="light"?"black":"white" }}>
    <div className="App">
      <h1>Hi From Frin </h1>
    </div>
    <Bar title="Text Utilss" mode={mode} toggle={toggle} />
    <div className="container">
    <TextArea head="Enter Text" mode={mode} />
    </div>
    </div>
    
    
   
   
   </>

  );
}

export default App;
