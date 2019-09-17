import React from 'react';
import './card.styles.css'

export const Card = (props) => {
    return(
        <div className="card-container">
            <img alt="robot image" src={`https://robohash.org/${props.monster.id}.png?set=set1&size=180x180`}/>
            <h1 >{props.monster.name}</h1>
            <h2>{props.monster.email}</h2>
        </div>
    );
}