import React from 'react';
import cardData from "../cardData";
import Card from '../card/card'

const CardList = () => {
    // console.log(cardData);
    return (
        <div>
            {cardData.map(card=> <Card key={card.id} title={card.title} body={card.body} userId={card.userId}/>)}
        </div>
    );
}

export default CardList;
