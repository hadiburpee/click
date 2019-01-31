import React from 'react';
import "./card.css"


function Card (props) {
        return(
            <div className="cardHolder">
                <span className="img-container">
                    <img alt={props.name} src={props.image} />
                </span>


            </div>

        );
    }


export default Card;