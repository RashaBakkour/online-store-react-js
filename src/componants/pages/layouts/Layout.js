import { Outlet } from "react-router-dom";
import Navbars from "../navbar/Navbars";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import AboutUs from "../aboutUs/AboutUs";
import Services from '../services/Services';
import Products from '../products/Products';
import ContactUs from '../contactUs/ContactUs';


const Layout = () => {
    return (
      <>
       <Navbars/>
       <main>
        <Home />
        <AboutUs />
        <Services />
        <Products />
        <ContactUs />

         <Outlet />
       </main>
       <Footer />
      </>
    );
  }
  
  export default Layout;