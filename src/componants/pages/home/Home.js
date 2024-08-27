import React from "react";
import Image from 'react-bootstrap/Image';
// import { Link } from "react-router-dom";
import homeImage from '../../assets/home-image.png';
import vector from '../../assets/Vector.png';
import google from '../../assets/logos_google-play-icon.png';
import './home.css'

const Home = () => {
    
    return (
        <>
            <section id="home">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='home-page col-lg-8'>
                            <div className="head">
                                <div className="h1">
                                    <h1 >arteficilal flowers </h1>
                                </div>
                                
                                <h2 >unique flowers delivered to your dooretep </h2>
                                <p>owalos provide artificial handmade flowers to make your home beautiful </p>
                                <button>shop now</button>
                            </div>
                            <div className="ratio">
                                <p className="product">10 M<br></br> product sold</p>
                                <p className="gifts">260 K <br></br>send gifts last year</p>
                                <p className="customers">95 % <br></br>happy customers</p>
                            </div>
                            <div className="download">
                                <button className="app-store">
                                    <Image className="apple" src={vector} />
                                    <p>available on the<br/><span>App Store</span> </p>
                                </button>
                                <button className="google">
                                    <Image className="google-play" src={google}/>
                                     <p style={{textTransform:"uppercase"}}>Git it on <br/> <span style={{textTransform:"none"}}> Google Play</span></p>
                               </button>
                            </div>
                        </div>
                        <div className='col-lg-4  '>
                            <Image className="home-img" src={homeImage} />
                        </div>
                    </div>
                </div>
            </section>
        </>
      
    );
  }
  
  export default Home;