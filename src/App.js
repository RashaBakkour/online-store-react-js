import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './componants/pages/home/Home';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import AboutUs from './componants/pages/aboutUs/AboutUs';
import Services from './componants/pages/services/Services';
import Products from './componants/pages/products/Products';
import ContactUs from './componants/pages/contactUs/ContactUs';
// import Layout from './componants/pages/layouts/Layout';
// import Router from './componants/Routes/Router';
import ProductDitels from './componants/pages/productDitels/ProductDitels';
import OrderDitels from './componants/pages/orderDitels/OrderDitels';
import DitelsLayout from './componants/pages/layouts/DitelsLayout';
import CheckOut from './componants/pages/checkout/CheckOut';
// import Navbars from './componants/pages/navbar/Navbars';
// import Footer from './componants/pages/footer/Footer';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/Layout" />}>
            
              <Route exact  element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="services" element={<Services />} />
              <Route path="products" element={<Products />} />
              <Route path="contact" element={<ContactUs />} />
              
            </Route>
          </Routes>

          <Routes>
            <Route element={<DitelsLayout />}>
              <Route path="product-ditels" element={<ProductDitels />} />
              <Route path="order-ditels" element={<OrderDitels />} />
              <Route path="checkout" element={<CheckOut />} />
            </Route>
          </Routes>
      </HashRouter>
     
      
    
    
  </div>
  );
}

export default App;
