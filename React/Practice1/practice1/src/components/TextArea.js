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
    const [text,setText] = useState("Example text")
  return (
    <>
    <div className='container'>
        <div>
        <FloatingLabel controlId="floatingTextarea2" label={props.head}>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          value={text}
          onChange={TextChange}
        />
      </FloatingLabel>
        </div>
     <Button className='btn btn-primary' onClick={Upper}>Upper Case</Button>
    </div>
     
    </>
  );
}






