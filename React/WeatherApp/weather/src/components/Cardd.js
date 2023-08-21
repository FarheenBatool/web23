import React, { useEffect, useState } from 'react'
import {Card,InputGroup,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCloud} from '@fortawesome/free-solid-svg-icons';

export default function Carddd() {
  const [city,setCity]=useState(null);
  const [search,setSearch]=useState('London');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchApi = async () =>{
      const apiKey = '115a61da1cdaf8471b54bf6043889059'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
      const response = await fetch(url)
      // console.log(response)
      const resJson = await response.json()
      console.log(resJson)
      setCity(resJson.main)

    }
    fetchApi();
  }, [search])
  

  return (
    <div className='container mt-5 '>
      <div className='row justify-content-center'> 
        <div className='col-md-4'>
          <Card className="bg-dark text-white text-center border-0 ">
          <Card.Img src="https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Card image" />
          <Card.ImgOverlay>
           
              <InputGroup className="mb-4 w-75 mx-auto">
                <Form.Control
                  type='search'
                  placeholder="Search City"
                  aria-label="Search City"
                  aria-describedby="basic-addon2"
                  onChange={handleSearchChange}
                  value={search}
                />
          {/* <button type='button' className='input-group-text' id="basic-addon2" onClick={()=> setSearch(search)}> */}
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          {/* </button> */}
        </InputGroup>
        
         {!city ?(
          <p>Data not found</p>
        ):(
          <div className='bg-dark bg-opacity-50 py-3'>
          <Card.Title className="mb-4"  style={{ fontSize: '2rem' }} >{search}</Card.Title>
          <Card.Text className='lead'>
            Friday, December 1 , 2002
          </Card.Text>
          <hr/>
          <FontAwesomeIcon icon={faCloud} style={{color: "#ebebeb",fontSize: '3rem'}} />
          <h1>{city.temp} &deg;C</h1>
          <p className='lead fw-bolder mb-0'>Cloud</p>
          <p className='lead'>{city.temp_min} &deg;C | {city.temp_max} &deg;C</p>
          </div>
        )
        }
          
           
          
          </Card.ImgOverlay>
          </Card>  

        </div>
      </div>
    </div>
   
    
  )
}




