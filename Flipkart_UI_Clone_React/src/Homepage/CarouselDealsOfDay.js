import React from 'react';
import './CarouselDealsOfDay.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HomeCard from './HomeCard';

function CarouselDealsOfDay(props) {
    const options = {
		loop: false,
		margin: 10,
		items: 6,
		autoplay: false,
		responsive: {
            0: {
              items: 1
            },
            768: {
              items: 3
            },
            900: {
              items: 6
            }
          },
		nav:true,
        dots:false,
        animateOut: 'fadeOut'
	  };

    return (
        <div>
            <div className="container--CarouselDealsOfDay">
                <div className='topCarouselDealsOfDay'>
                    <div className="title--CarouselDealsOfDay">
                        <h3>{props.title}</h3>
                    </div>
                    <div className='view--CarouselDealsOfDay'>
                        <button>VIEW ALL</button>
                    </div>
                </div>
                <div className='carousel--CarouselDealsOfDay'>
                    <OwlCarousel className="owl-theme" {...options}>
                              <HomeCard className="item" image={props.img1} name={props.productName1} offer={props.offer1} keys={props.keywords1}/>
                              <HomeCard className="item" image={props.img2} name={props.productName2} offer={props.offer2} keys={props.keywords2}/>                   
                              <HomeCard className="item" image={props.img3} name={props.productName3} offer={props.offer3} keys={props.keywords3}/>  
                              <HomeCard className="item" image={props.img4} name={props.productName4} offer={props.offer4} keys={props.keywords4}/>  
                              <HomeCard className="item" image={props.img5} name={props.productName5} offer={props.offer5} keys={props.keywords5}/>  
                              <HomeCard className="item" image={props.img6} name={props.productName6} offer={props.offer6} keys={props.keywords6}/>  
                              <HomeCard className="item" image={props.img7} name={props.productName7} offer={props.offer7} keys={props.keywords7}/>  
                              <HomeCard className="item" image={props.img8} name={props.productName8} offer={props.offer8} keys={props.keywords8}/>  
                    </OwlCarousel>               
                </div>
                
            </div>
        </div>
    )
}

export default CarouselDealsOfDay
