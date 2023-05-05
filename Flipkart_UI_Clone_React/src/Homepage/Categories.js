import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import topOffer from './images/categories/topOffer.jpg';
import electronics from './images/categories/electronics.jpg';
import tvApp from './images/categories/tvApp.jpg';
import beautyToys from './images/categories/beautyToys.jpg';
import homeFur from './images/categories/homeFur.jpg';
import kitApp from './images/categories/kitApp.jpg';
import mobile from './images/categories/mobile.jpg';
import fashion from './images/categories/fashion.jpeg';
import womenFas from './images/categories/womenFas.jpg';
import winterEss from './images/categories/winterEss.jpg';
import homeUtl from './images/categories/homeUtl.jpg';
import houseHold from './images/categories/houseHold.jpg';
import {Link} from "react-router-dom";
import './Categories.css';

function Categories() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <div className="categories">
            <div className="container">
         <div className="row">

            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-right"} >
               <Link to="/products">
                 <img className="cat-img" src={topOffer} alt="logo"/>
               </Link>
            </div>
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-right"}>
               <a href="mobile.html">
                 <img className="cat-img" src={electronics} alt="logo"/>
               </a>
            </div>
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-right"}>
               <a href="mobile.html">
                 <img className="cat-img" src={tvApp} alt="logo"/>
               </a>
            </div>
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-up"}>
               <a href="mobile.html">
                 <img className="cat-img" src={beautyToys} alt="logo"/>
               </a>
            </div>
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-up"}>
               <a href="mobile.html">
                 <img className="cat-img" src={homeFur} alt="logo"/>
               </a>
            </div>
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-up"}>
               <a href="mobile.html">
                 <img className="cat-img " src={kitApp} alt="logo"/>
               </a>
            </div>
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-down"}>
               <a href="mobile.html">
                 <img className="cat-img" src={mobile} alt="logo"/>
               </a>
            </div>
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-down"}>
               <a href="mobile.html">
                 <img className="cat-img" src={fashion} alt="logo"/>
               </a>
            </div>
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-down"}>
               <a href="mobile.html">
                 <img className="cat-img" src={womenFas} alt="logo"/>
               </a>
            </div>
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-left"}>
               <a href="mobile.html">
                 <img className="cat-img" src={winterEss} alt="logo"/>
               </a>
            </div>
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-left"}>
               <a href="mobile.html">
                 <img className="cat-img" src={homeUtl} alt="logo"/>
               </a>
            </div>
            
            <div className="cat col-md-1 col-sm-2 col-2" data-aos={"fade-left"}>
               <a href="mobile.html">
                 <img className="cat-img" src={houseHold} alt="logo"/>
               </a>
            </div>

          </div>
      </div>
        </div>
    )
}

export default Categories
