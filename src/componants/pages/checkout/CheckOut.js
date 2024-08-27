/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import Image from 'react-bootstrap/Image';
import map from '../../assets/Basemap image.png';
import './checkOut.css';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    
  return (
    <>
    
    <section id='checkout' >
            <div className='container'>
               
                        <div className="check-out" >
                            <div className="checkout">
                                <h1 >billing adress</h1>
                                <form id="form" action="/">
                                    <div className='checkout-form'>
                                        <div class="input-control">
                                            <input type="text" className="input-contact" id="promocode" name="promocode"  />
                                            <label className="label">full Name</label>
                                        </div>

                                        <div class="input-control">
                                            <input type="text" className="input-contact" id="promocode" name="promocode"  />
                                            <label className="label">email</label>
                                        </div>
                                        <div class="input-control">
                                            <input type="text" className="input-contact" id="promocode" name="promocode"  />
                                            <label className="label">city</label>
                                        </div>

                                        <div class="input-control">
                                            <input type="text" className="input-contact" id="promocode" name="promocode"  />
                                            <label className="label">adress</label>
                                        </div>
                                    </div>
                                    <div className='payment-ditels'>
                                        <h1>payment ditels</h1>
                                        <div className='checkout-form'>
                                        <div class="input-control">
                                            <input type="text" className="input-contact" id="promocode" name="promocode"  />
                                            <label className="label">name on card</label>
                                        </div>

                                        <div class="input-control">
                                            <input type="text" className="input-contact" id="promocode" name="promocode"  />
                                            <label className="label">credit card number</label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='checkout-btn'>
                                        <Link to= '/'>
                                            <button className="check-btn" >back</button>
                                        </Link>
                                        <Link>
                                            <button className="check-btn" >send</button>
                                        </Link>
                                        
                                    </div>

                                    
                                    
                                </form>
                            </div>
                            <div className='checkout-map'> 
                                <div className='map-image'>
                                    <img src={map}></img>
                                </div>
                                <div className='map-btn'>
                                    <button>gas station</button>
                                    <button>hospitals</button>
                                    <button>school</button>
                                </div>
                                <div className='location'>
                                    <h2>location</h2>
                                    <p>
                                    255 km bhguvyyv jgbyflg jbuig 
                                    fbidhnsoj srgbihog goeeghwgn 
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    
                        
                    
            
            </div>
        </section>
    </>
    
  );
}

export default CheckOut;