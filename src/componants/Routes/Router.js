import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDitels from "../pages/productDitels/ProductDitels";
import OrderDitels from "../pages/orderDitels/OrderDitels";
// import Navbars from "../pages/navbar/Navbars";
// import Footer from "../pages/footer/Footer";

const Router = ()=>{
    return(
        <>
        
        <Routes>
            <Route path="product-ditels" element={<ProductDitels />} />
            <Route path="order-ditels" element={<OrderDitels />} />

        </Routes>
        
        </>
    );
}

export default Router;