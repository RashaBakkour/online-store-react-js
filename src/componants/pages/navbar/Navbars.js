// import React, { useTransition } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo.png';
import '../navbar/navbar.css'
import { Link } from 'react-router-dom';

const Navbars = ()=>{
    
    return(
       <>
            <Navbar expand="lg" className='navbar'>
                <Container  >
                    <Navbar.Brand href="#home">
                        <Image src= {logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='nav'>
                        <Link to='/' className='home'>Home</Link>
                        <Link to='' className='about' >About Us</Link>
                        <Link to='' className='product' >Products</Link>
                        <Link to='' className='services'>Services</Link>
                        <Link to='' className='contact' >Contact Us</Link>
                        
                        
                    </Nav>
                    <Nav className='right '>
                        <div className='nav-icons'>
                            <div class="input-container">
                                <input type="text" name="text" class="input"  placeholder="search product" />
                                <div class="icon">
                                <box-icon name='search' color= 'rgba(214, 239, 216, 1)'></box-icon>
                                </div>
                            </div>
                            
                            <box-icon name='heart' color= 'rgba(214, 239, 216, 1)'></box-icon>
                            <box-icon name='cart' color= 'rgba(214, 239, 216, 1)'></box-icon>
                           
                        </div>
                        <div className='nav-select'>
                            <Form.Select aria-label="Default select example" className='select'>
                                <option value="en" >English</option>
                                <option value="ar" >Arabic</option>
                            </Form.Select>
                            <button id="theme-switch">
                                <box-icon name='moon' color= 'rgba(76, 85, 55, 1)'></box-icon>
                                <box-icon name='sun' color='rgba(255, 255, 255, 1)'></box-icon>
                            </button>
                            
                        </div>
                        
                        <button>Logout</button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </>
    );
}

export default Navbars;