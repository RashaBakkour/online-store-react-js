/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './orderDitels.css';
import image23 from '../../assets/image 23.png';
import image24 from '../../assets/image 24.png';
import rafa from '../../assets/pexels-rafa-de-21730-97260-removebg-preview 2.png';
import visa from '../../assets/formkit_visa.png';
import master from '../../assets/master.png';
import image26 from '../../assets/image 26.png';
import { Link } from "react-router-dom";

const OrderDitels = ()=>{
    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="cart">
                            <h2>cart</h2>
                            <p>check your cart items before proceeding to payment</p>
                            <div className="order-ditels">
                                <div className="card mb-3" >
                                    <div className="row g-0">
                                        <div className="col-md-3">
                                            <img src={image23} className="img-fluid rounded-start" alt="..."></img>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="card-body order-body">
                                                <div className="order">
                                                    <p>Succulents</p>
                                                    <p>-  amount 1 +</p>
                                                    <p>30.00$</p>
                                                </div>
                                                <div className="order-action">
                                                    <box-icon  name='trash' color='rgba(26, 83, 25, 1)'></box-icon>
                                                    <p>Edit Order</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3" >
                                    <div className="row g-0">
                                        <div className="col-md-3">
                                            <img src={image24} className="img-fluid rounded-start" alt="..."></img>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="card-body order-body">
                                                <div className="order">
                                                    <p>Succulents</p>
                                                    <p>-  amount 1 +</p>
                                                    <p>30.00$</p>
                                                </div>
                                                <div className="order-action">
                                                    <box-icon  name='trash' color='rgba(26, 83, 25, 1)'></box-icon>
                                                    <p>Edit Order</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3" >
                                    <div className="row g-0">
                                        <div className="col-md-3">
                                            <img src={rafa} className="img-fluid rounded-start" 
                                                alt="..." style={{
                                                width: '122px',
                                                height: '197px',
                                                top: '872px',
                                                left: '21px',
                                            }}>
                                            </img>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="card-body order-body">
                                                <div className="order">
                                                    <p>Succulents</p>
                                                    <p>-  amount 1 +</p>
                                                    <p>30.00$</p>
                                                </div>
                                                <div className="order-action">
                                                    <box-icon  name='trash' color='rgba(26, 83, 25, 1)'></box-icon>
                                                    <p>Edit Order</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment">
                                    <div className="payment-header">
                                        <p>payment</p>
                                        <button>
                                            <box-icon name='plus-circle' color='rgba(255, 255, 255, 1)'></box-icon>add payment card
                                        </button>
                                    </div>
                                    <div className="payment-body">
                                        <div className="visa">
                                            <img src={visa}></img>
                                            <p>visa debit card</p>
                                            <p>**** **** **** 2314</p>
                                            <box-icon name='check-circle' type='solid' color= 'rgba(214, 239, 216, 1)'></box-icon>
                                        </div>
                                        <div className="master">
                                            <img src={master}></img>
                                            <p>master card</p>
                                            <p style={{marginLeft: '10px'}}>**** **** **** 2314</p>
                                            <box-icon name='check-circle' type='solid' color= 'rgba(26, 83, 25, 1)'></box-icon>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="summary-order">
                            <h2>summary order</h2>
                            <div class="input-group">
                                <input type="text" className="input" id="promocode" name="promocode"  />
                                <label className="label">promocode</label>
                                <input className="button--submit" value="Apply" type="submit" />
                            </div>
                            <div className="total-cost">
                                <div className="cost">
                                    <p>Total <span> 100.00$</span></p>
                                    <p>Shipping <span>10.00$</span> </p>
                                </div>
                                <div className="total">
                                    <p>Total Cost <span>110.00$</span> </p>
                                </div>
                            </div>
                            <div className="order-links">
                                <Link to='/checkout'>
                                    <button className="next">next</button>
                                </Link>
                                <Link to='/'>
                                    <button className="back" >back</button>
                                </Link>
                            </div>
                            <div className="order-imag">
                                <img src={image26}></img>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
}

export default OrderDitels;