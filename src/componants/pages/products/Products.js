import React from 'react';
import Image from 'react-bootstrap/Image';
import image31 from '../../assets/Rectangle 31.png';
import image36 from '../../assets/Rectangle 36.png';
import image34 from '../../assets/Rectangle 34.png';
import image35 from '../../assets/Rectangle 35.png';
import './produts.css'
import { Link } from 'react-router-dom';


const Products = () => {
  return (
    <>
    <section id='products'>
        <div className='container'>
            <div className='section-title ' >
                    <h2>Our products</h2>
            </div>
            <div className='row our-product'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='content'>
                        <div className='product-image'>
                            <Image src= {image31} />
                        </div>
                        <div className='link'>
                            <Link to='/product-ditels' className='link-name'>see more</Link>
                        </div>
                    </div>
            
                    <div className='more-content'>
                        <h2>Succulents</h2>
                        <p>30.00$</p>
                        <div className='cart'>
                            <Link to= '/order-ditels'><box-icon name='cart'></box-icon></Link>
                            
                        </div>
                        
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='content'>
                        <div className='product-image'>
                            <Image src= {image36} />
                        </div>
                        <div className='link'>
                            <Link to='/product-ditels' className='link-name'>see more</Link>
                        </div>
                    </div>
            
                    <div className='more-content'>
                        <h2>Bromeliads</h2>
                        <p>50.00$</p>
                        <div className='cart'>
                            <box-icon name='cart'></box-icon>
                        </div>
                        
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='content'>
                        <div className='product-image'>
                            <Image src= {image34} />
                        </div>
                        <div className='link'>
                            <Link to='/product-ditels' className='link-name'>see more</Link>
                        </div>
                    </div>
            
                    <div className='more-content'>
                        <h2>Calathea</h2>
                        <p>20.00$</p>
                        <div className='cart'>
                            <box-icon name='cart'></box-icon>
                        </div>
                        
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='content'>
                        <div className='product-image'>
                            <Image src= {image35} />
                        </div>
                        <div className='link'>
                            <Link to='/product-ditels' className='link-name'>see more</Link>
                        </div>
                    </div>
            
                    <div className='more-content'>
                        <h2>Croton</h2>
                        <p>40.00$</p>
                        <div className='cart'>
                            <box-icon name='cart'></box-icon>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>

  );
}

export default Products;