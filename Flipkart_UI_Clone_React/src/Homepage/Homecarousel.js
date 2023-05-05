import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Homecarousel.css';

function Homecarousel() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	  }, []);
	  
	  const options = {
		loop: true,
		margin: 10,
		items: 1,
		autoplay: 500,
		reponsive: false,
		nav:true,
    dots:true,
    animateOut: 'fadeOut'
	  };

return (
	<div className="carousel">
	<OwlCarousel data-aos={"fade-up"} className="owl-theme" {...options}>

            <div className="item" data-aos={"fade-up"}>
              <img className="img-homecarousel" src="https://rukminim1.flixcart.com/flap/1688/280/image/296e1504bce3ee6a.jpg?q=50"  alt="no" />
            </div>
            <div className="item" data-aos={"fade-up"}>
              <img className="img-homecarousel" src="https://rukminim1.flixcart.com/flap/1688/280/image/63e8dae9fc5a1f20.jpeg?q=50"   alt="no" />
            </div>
            <div className="item" data-aos={"fade-up"}>
              <img className="img-homecarousel" src="https://rukminim1.flixcart.com/flap/1688/280/image/066a100c3ecf6cff.jpg?q=50"   alt="no" />
            </div>
            <div className="item" data-aos={"fade-up"}>
              <img className="img-homecarousel" src="https://rukminim1.flixcart.com/flap/1688/280/image/21bdaae0ae2b9f32.jpeg?q=50" alt="no" />
            </div>
            <div className="item" data-aos={"fade-up"}>
              <img className="img-homecarousel" src="https://rukminim1.flixcart.com/flap/3376/560/image/af5b9484e8033ddb.jpeg?q=50" alt="no" />
            </div>
            </OwlCarousel>
	</div>
);
}
export default Homecarousel;
