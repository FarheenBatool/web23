import React from 'react'
import {Card,InputGroup,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCloud} from '@fortawesome/free-solid-svg-icons';







export default function Carddd() {
  return (
    <div className='container mt-5 '>
      <div className='row justify-content-center'> 
        <div className='col-md-4'>
          <Card className="bg-dark text-white text-center border-0 ">
          <Card.Img src="https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Card image" />
          <Card.ImgOverlay>
            <form>
              <InputGroup className="mb-4 w-75 mx-auto">
                <Form.Control
                  type='search'
                  placeholder="Search City"
                  aria-label="Search City"
                  aria-describedby="basic-addon2"
                />
          <button type='submit' className='input-group-text' id="basic-addon2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </InputGroup>
            </form>
            <div className='bg-dark bg-opacity-50 py-3'>
            <Card.Title className="mb-4"  style={{ fontSize: '2rem' }} >London  </Card.Title>
            <Card.Text className='lead'>
              Friday, December 1 , 2002
            </Card.Text>
            <hr/>
            <FontAwesomeIcon icon={faCloud} style={{color: "#ebebeb",fontSize: '3rem'}} />
            <h1>33.0 &deg;C</h1>
            <p className='lead fw-bolder mb-0'>Cloud</p>
            <p className='lead'>30.01 &deg;C | 37.02 &deg;C</p>
            </div>
          
          </Card.ImgOverlay>
          </Card>  

        </div>
      </div>
    </div>
   
    
  )
}


