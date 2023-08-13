import React,{useState} from 'react'
import './App.css';
import Bar from './components/Bar';
import TextArea from './components/TextArea';
import { Route,Routes } from 'react-router-dom';
import Notfound from './components/Notfound';
import NestedRoute from './components/NestedRoute';



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

  <Routes>

  <Route path='/' element={<Bar title="Text Utilss" mode={mode} toggle={toggle}/>}/>
  <Route path="/features/*" element={<NestedRoute mode={mode} toggle={toggle}/>}/>
  {/* 3 and 4 are same but version six has the speciality to recognize better smartt */}
  <Route path='*' element={<Notfound/>}/>

  </Routes>
   
    <div className='container' style={{color:mode==="light"?"black":"white" }}>
    <div className="App">
      <h1>Hi From Frin </h1>
    </div>
    {/* <Bar title="Text Utilss" mode={mode} toggle={toggle} /> */}
    <div className="container">
    <TextArea head="Enter Text" mode={mode} />
    </div>
    </div>

  
    

    
    </>


  );
}

export default App;
