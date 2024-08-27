import React from 'react';
import Image from 'react-bootstrap/Image';
import image33 from '../../assets/Rectangle 33.png';
import './contactUs.css';

const ContactUs = () => {
    
  return (
    <>
    
    <section id='contact' >
            <div className='container'>
                <div className='section-title'>
                    <h2>contact us</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                        <div className="login" >
                            <div className="contact-us">
                                <h1 >contact</h1>
                                <form id="form" action="/">
                                    <div className='form-grid'>
                                        <div class="input-control">
                                            <input type="text" className="input-contact" id="promocode" name="promocode"  />
                                            <label className="label">First Name</label>
                                        </div>

                                        <div class="input-control">
                                            <input type="text" className="input-contact" id="promocode" name="promocode"  />
                                            <label className="label">Last Name</label>
                                        </div>
                                    </div>
                                    <div className='form'>
                                        <div class="input-control">
                                            <input type="email" className="input-contact" id="promocode" name="promocode"  />
                                            <label className="label">Email</label>
                                        </div>
                                        <div class="input-control">
                                            <input type="text" className="input-contact" id="promocode" name="promocode"  />
                                            <label className="label">Message</label>
                                        </div>
                                    </div>

                                    <button className="contact-btn" >send</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <div className='info'>
                            <Image src={image33}/>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    </>
    
  );
}

export default ContactUs;