import About from "../component/About";
import Footer from "../component/Footer";

import HeroSection from "../component/HeroSection";
import Reservation from "../component/Reservation";



const Home = () =>{
    return(
        <>
       <HeroSection></HeroSection>
       <About></About>
       
  <Reservation></Reservation>
  <Footer></Footer>

        </>
    )
}
export default Home;