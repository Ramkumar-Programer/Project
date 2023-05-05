import React from 'react';
import "./Cardpd.css";

function Cardpd(fun) {
  return (
    <div className='cardpd'>
        <div className='pd--img'>

            <div className="item--pd" data-aos={"fade-up"}>
            <img src={fun.img} alt='no'/>
            </div>
        </div>
        <div className='title--cardpd'>TRIPR</div>
    </div>
  )
}

export default Cardpd
