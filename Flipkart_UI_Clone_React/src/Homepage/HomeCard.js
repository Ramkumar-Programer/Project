import React from 'react';
import './HomeCard.css'

function HomeCard(props) {
    return (
        <div className="homecard--carousel">
            <div className="homeimgBx--carousel">
                <img src={props.image} alt='ggg'/>

            </div>
            <div className="homecontent--carousel">
                <div className="homeproductName--carousel">
                    <h3>{props.name}</h3>
                </div>
                <div className="homeoffer--details--carousel">
                    <h4>{props.offer}</h4>
                </div>
                <div className="homeother--products--carousel">
                    <h3>{props.keys}</h3>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;
