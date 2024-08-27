/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './productDitels.css'
import green_plant from '../../assets/green-plant.png';
import product_img from '../../assets/product_img.png';
import { Link } from "react-router-dom";
import SimilarItem from "../similarItem/SimilarItem";
import Offer from "../offer/Offer";

const ProductDitels = ()=>{
    return(
        <>
            <section id="product_ditels">
                <div className="container-fluid">
                    <div className='section-header' >
                        <img src={green_plant} alt="image"></img>
                        <h2>Green Plant</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="ditels-header">
                        <button className="left">filter</button>
                        <button className="right">
                            <Link to='/'>
                                <box-icon name='arrow-back' color='rgba(214, 239, 216, 1)'></box-icon>
                            </Link>
                        </button>
                        
                    </div>
                    
                    <div className="product-ditels">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="product-image">
                                    <img src={product_img} alt="image"></img>
                                    <div className="review">
                                        <box-icon type='solid' name='star' color='rgba(124, 135, 97, 1)'></box-icon>
                                        <box-icon type='solid' name='star' color='rgba(124, 135, 97, 1)'></box-icon>
                                        <box-icon type='solid' name='star' color='rgba(124, 135, 97, 1)'></box-icon>
                                        <box-icon type='solid' name='star' color='rgba(255, 255, 255, 1)'></box-icon>
                                        <p>Review</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 col-sm-12">
                                <div className="ditels">
                                    <h1>Succulents</h1>
                                    <div className="description">
                                        <p>
                                            Succulents are a fascinating group of plants
                                            renowned for their ability to thrive in arid 
                                            conditions. These botanical marvels have adapted to survive in environments with minimal wate availability, making them popular choices for low-maintenance gardening.
                                        </p>
                                    
                                        <div className="more-description">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="size">
                                                        <h2>Size <br/><span>Medium</span></h2>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="height"> 
                                                        <h2>Height <br/> <span>12.5cm</span></h2>
                                                    
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="category">
                                                        <h2>Category <br/> <span>green plants</span></h2>
                                                    
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="color">
                                                        <h2>Color <br/> <span>Green</span></h2>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    
                                </div>
                                <div className="more-ditels">
                                    <div className="quintity">
                                        <p>Quintity</p>
                                        <button className="max"><span>+</span></button>
                                        <p className="number">0</p>
                                        <button className="min"><span>-</span></button>
                                    </div>
                                    <div className="price">
                                        <p>Pric : 30.00$</p>
                                    </div>
                                </div>
                                <div className="links">
                                    <button className="buy">
                                        buy now <box-icon name='lock-alt' color='rgba(124, 135, 97, 1)'></box-icon>
                                    </button>
                                    <button className="add-cart">
                                        add to cart <box-icon name='cart' color='rgba(255, 255, 255, 1)'></box-icon>
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            </section>

            <SimilarItem />
            <Offer />
        </>
    );
}

export default ProductDitels;