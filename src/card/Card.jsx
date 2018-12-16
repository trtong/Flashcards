import React from 'react';
import './Card.css';

// this is more a presentation ~

const Card = (props) => (
    <div className = "card-container">
        <div className = "card">
            <div className = "front">
                <div className = "term">
                {props.term}
                </div>
            </div>
            <div className = "back">
            <div className = "definition"> {props.definition}</div>
            </div>
        </div>
    </div>
)

export default Card