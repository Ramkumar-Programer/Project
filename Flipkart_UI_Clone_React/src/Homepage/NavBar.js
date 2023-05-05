import React, { useEffect,useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import classNames from 'classnames';
import './NavBar.css';
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch}from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
     
  const menus = () =>{
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
         
    <div className="topbar" >
          <nav>
          <button className={classNames('fancy-burger', {'hide':!isOpen})} onClick={menus}>
             <span className="box"></span>
             <span className={classNames('rectangle','rectangle--small','rectangle--top' ,{'hide':isOpen})}></span>
             <span className={classNames('rectangle','rectangle--middle' ,{'hide':isOpen})}></span>
             <span className={classNames('rectangle','rectangle--small','rectangle--bottom' ,{'hide':isOpen})}></span>
         </button>
         <Link  to="/">
        <div className="logo" >
          Shopping<br /><h5 className="logo-down">Explore more</h5>
        </div>
        </Link>
        <form action="index.html"  data-aos={"fade-up"}>
          <input type="search" className="search-data" placeholder="Search" required />
          <button type="submit"><FontAwesomeIcon className='searchIcon' icon={faSearch} /></button>
        </form>
        <div className={classNames('nav-items', {'active':isOpen})}>
          <li><a href="index.html">Login</a></li>
          <li><a href="index.html">More</a></li>
        </div>
        <div className="nav-items-2"  data-aos={"fade-up"}>
          <li><a href="index.html"><FontAwesomeIcon className='searchIcon' icon={faShoppingCart} /></a></li>
        </div>
      </nav>
      
    </div>
  );
  
}
export default NavBar;

