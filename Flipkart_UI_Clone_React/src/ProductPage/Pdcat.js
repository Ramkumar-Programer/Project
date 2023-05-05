import React from 'react';
import './Pdcat.css';
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faAngleDown}from '@fortawesome/free-solid-svg-icons';

function Pdcat() {
  return (
    <div className='pdcat'>
        <div className='pdcat1'>
            <span>Electronics</span>
            <FontAwesomeIcon icon={faAngleDown} className="catDownIcon"/>
        </div>
        <div className='pdcat1'>
            <span>TV & Appliances</span>
            <FontAwesomeIcon icon={faAngleDown} className="catDownIcon"/>
        </div>
        <div className='pdcat1'>
            <span>Men</span>
            <FontAwesomeIcon icon={faAngleDown} className="catDownIcon"/>
        </div>
        <div className='pdcat1'>
            <span>Women</span>
            <FontAwesomeIcon icon={faAngleDown} className="catDownIcon"/>
        </div>
        <div className='pdcat1'>
            <span>Baby & Kids</span>
            <FontAwesomeIcon icon={faAngleDown} className="catDownIcon"/>
        </div>
        <div className='pdcat1'>
            <span>Home & Furniture</span>
            <FontAwesomeIcon icon={faAngleDown} className="catDownIcon"/>
        </div>
        <div className='pdcat1'>
            <span>Sports,Book & More</span>
            <FontAwesomeIcon icon={faAngleDown} className="catDownIcon"/>
        </div>
    </div>
  )
}

export default Pdcat