import React from 'react';
import Image from 'react-bootstrap/Image';
import image61 from '../../assets/Rectangle 61.png'
import './offer.css';
// import { Link } from 'react-router-dom';


const Offer = () => {
  return (
    <>
        
        <section id='sale'> 
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Image src= {image61} className="rose" alt="..."/>
                    </div>
                    <div className='col-lg-6'>
                        <div className='details'>
                            <h5 >limited offer</h5>
                            <p >35% off only this fraiday and git special gift</p>
                            <button>
                                grab it now <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Offer;