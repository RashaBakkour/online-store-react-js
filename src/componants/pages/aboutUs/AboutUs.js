import React from 'react';
import Image from 'react-bootstrap/Image';
import plant from '../../assets/plant.png';
import box from '../../assets/box.png';
import phone from '../../assets/phone.png';
import image61 from '../../assets/Rectangle 61.png'
import './aboutUs.css';
// import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <>
        <section id='aboutUs'>
            <div className='container'>
                <div className='section-title' >
                    <h2>About us</h2>
                    <p>this site for those who admire the beauty and harmony of nature</p>
                </div>
                <div className='row'>
                    <div className='col-lg-4' >
                        <div className="card about-us" >
                            <Image src={plant} className="card-img" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">large assortment</h5>
                                <p className="card-text">
                                    we offer our customers more than 15.000
                                    items of natural and artiificial flower, tress and
                                    many accessories for floristry 
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4' >
                        <div className="card about-us" >
                            <Image src={box} className="card-img" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">free&fast shipping</h5>
                                <p className="card-text">
                                    we will ship your goods after receipt 
                                    of founds to the current a ccount, choose
                                    the most convenient from the offerd 
                                    delivery option
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4' >
                        <div className="card about-us" >
                            <Image src={phone} className="card-img" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">24/7 support</h5>
                                <p className="card-text">
                                    we work seven days a week  and a lunch
                                    break,we willbe glad to welcome you as our
                                    buyer and thank you for your trust in ue  
                                </p>
                            
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
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

export default AboutUs;