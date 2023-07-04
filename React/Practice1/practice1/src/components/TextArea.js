import React , {useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




export default function TextArea(props) {
    function TextChange(event) {
        console.log("TextChange")
        setText(event.target.value)
        
    }
    function Upper(){
        console.log("Button Upper")
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    function Lower(){
      console.log("Button Upper")
      let newtext = text.toLowerCase();
      setText(newtext)
  }
    const [text,setText] = useState("Example text")
  return (
    <>
    <div className='container my-2'>
        <div>
        <FloatingLabel controlId="floatingTextarea2" label={props.head}>
        <Form.Control
          as="textarea"
          style={{ height: '100px',color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="dark"?"black":"white"  }}
          value={text}
          onChange={TextChange}
        />
      </FloatingLabel>
        </div>
     <Button className='btn btn-primary ,container my-2 ' onClick={Upper}>Upper Case</Button>
     <Button className='btn btn-primary ,container my-2 mx-2' onClick={Lower}>Lower Case</Button>

     <div>
      <h4>Length of text {text.length}</h4>
      {/* <h4>Number of words {text.split(" ").length}</h4> */}
      <h4>Number of words {text.trim() ? text.trim().split(" ").length : 0}</h4>


     </div>
    </div>
     
    </>
  );
}



const styles = {
  labelLight: {
    color: 'black',
  },
  
  labelDark: {
    color: 'white',
  }
};





