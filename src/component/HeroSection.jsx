import Navbar from "./Navbar";

const HeroSection = () =>{
    return(
       
        <section className="heroSection" id="heroSection">
     <Navbar></Navbar>
        <div className="container">
          <div className="banner">
            <div className="largeBox">
              <h1 className="title">Book</h1>
            </div>
            <div className="combined_boxes">
              <div className="imageBox">
                <img src="./hero1.jpeg" alt="hero1" />
              </div>
              <div className="textAndLogo">
                <div className="textWithSvg">
                  <h1 className="title">Your</h1>
                  { <h1 className="title dishes_title">Table</h1> }
                 
                </div>
               
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="imageBox">
              <img src="hero1.jpeg" alt="hero" />
            </div>
            <h1 className="title dishes_title">Table</h1>
          </div>
        </div>
      </section>



    );


};
export default HeroSection;