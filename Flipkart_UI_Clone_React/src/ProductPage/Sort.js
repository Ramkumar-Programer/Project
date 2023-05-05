import React from 'react';
import './Sort.css';

function sort() {
  return (
    <div className='sort'>
        <div className='title--pd'>
           <h5>Men's Clothing</h5>
        </div>
        <div className='sortBy'>
            <h6>Sort By</h6>
            <div className='sortBy--list'>
                <span>Popularity</span>
                <span>Price--Low to High</span>
                <span>Price--High to Low</span>
                <span>Newest First</span>
            </div>
        </div>
    </div>
  )
}

export default sort