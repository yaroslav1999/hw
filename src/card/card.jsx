import React from 'react';
import '../card/card.css'
import CardEdit from './card-edit';


const Card = ({cardData, deleteCard, updateCard}) => {
    return (
        <div className="card">
            <h2>{cardData.title}</h2>
            <p>{cardData.body}</p>
            <button onClick = {()=>deleteCard(cardData.id)} >Delete</button>
            {/* <button onClick = {()=>editCard(cardData.id)} >Edit</button> */}
            <CardEdit card={cardData} updateCard={updateCard}/>
        </div>
    );
}

export default Card;
