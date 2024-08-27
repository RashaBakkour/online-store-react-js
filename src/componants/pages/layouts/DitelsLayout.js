import { Outlet } from "react-router-dom";
import Navbars from "../navbar/Navbars";
import Footer from "../footer/Footer";


const DitelsLayout = () => {
    return (
      <>
       <Navbars />
       <main>
        <Outlet/>
       </main>
       <Footer />
      </>
    );
  }
  
  export default DitelsLayout;