import React from 'react';
import Image from 'react-bootstrap/Image';
import frame40 from '../../assets/Frame 40.png';
import frame39 from '../../assets/Frame 39.png';
import frame38 from '../../assets/Frame 38.png';
import frame41 from '../../assets/Frame 41.png';
// import 'boxicons';
import './services.css';
// import Features from './Features';
// import MoreServices from './MoreServices';

const Services = () => {
  return (
    <>
    <section id='services' >
            <div className='container-fluid'>
                <div className='section-title ' >
                    <h2>Our Services</h2>
                </div>
                <div className=' gallery'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 '>
                                <div className=' service'>
                                    <Image className='image' src={frame41}/>
                                    <div className='service-name'>
                                        <h4 className='title'>Selling flower bouquets </h4>
                                        <div className='icon' >
                                            <box-icon  name='right-arrow-alt' color='rgba(124, 135, 97, 1)' size='28px' pull = "right" ></box-icon>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                        </div>
                        <div className='col-lg-3 col-md-6 '>
                                <div className='service'>
                                    <Image className='image' src={frame39}/>
                                    <div className='service-name'>
                                        <h4 className='title'>Selling<br/> houseplants </h4>
                                        <div className='icon' >
                                            <box-icon  name='right-arrow-alt' color='rgba(124, 135, 97, 1)' size='28px' pull = "right" ></box-icon>
                                        </div>
                                        
                                    </div>
                                    
                                
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                                <div className=' service'>
                                    <Image className='image' src={frame38}/>
                                    <div className='service-name'>
                                        <h4 className='title'>Packaging<br/> service </h4>
                                        <div className='icon' >
                                            <box-icon  name='right-arrow-alt' color='rgba(124, 135, 97, 1)' size='28px' pull = "right" ></box-icon>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                        </div>
                        <div className='col-lg-3 col-md-6 '>
                                <div className=' service'>
                                    <Image className='image' src={frame40}/>
                                    <div className='service-name'>
                                        <h4 className='title'>Delivery<br/> service </h4>
                                        <div className='icon' >
                                            <box-icon  name='right-arrow-alt' color='rgba(124, 135, 97, 1)' size='28px' pull = "right" ></box-icon>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    </>
    

  );
}

export default Services;