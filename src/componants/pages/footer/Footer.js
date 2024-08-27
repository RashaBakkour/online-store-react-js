/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png' ;
import './footer.css'

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer__links">
                    <div className="sb__footer__links__logo">
                        <img src={logo}/>
                        <p>
                        owalos provide artificial handmade flowers to make your home beautiful 
                        </p>
                    </div>
                    <div className="sb__footer__links__div">
                        <h4>quick links</h4>
                        <div className="links">
                            <a href="/home">
                                <p>Home</p>
                            </a>
                            <a href="/home">
                                <p>Products</p>
                            </a>
                            <a href="/home">
                                <p>About Us</p>
                            </a>
                            <a href="/home">
                                <p>Services</p>
                            </a>
                        </div>
                        
                    </div>
                    <div className="sb__footer__links__div">
                        <h4>contact us</h4>
                        <div className="contact__us">
                            <div className='icon'>
                                <box-icon name='phone' color='rgba(214, 239, 216, 1)' ></box-icon>
                                <p>8979925</p>
                            </div>
                            <div className='icon'>
                                <box-icon name='envelope' color='rgba(214, 239, 216, 1)' ></box-icon>
                                <p>info@gmail.com</p>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    <div className="sb__footer__links__div">
                        <h4>follow us</h4>
                        <div className="socialmedia">
                            <p><img src={facebook}></img></p>
                            <p><img src={instagram}></img></p>
                            <p><img src={twitter}></img></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer