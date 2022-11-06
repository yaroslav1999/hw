import React, { useContext } from 'react';

import Card from '../card/card'
import CardContext from '../contexts/cardContext';

const CardList = () => {
    const [cards, setCards] = useContext(CardContext);
    

    const deleteCard=(id)=>{
        const newCards = cards.filter((card) => card.id !== id);
        setCards(newCards);
        localStorage.setItem("cards", JSON.stringify(newCards));
    }
    const updateCard=(values)=>{
        // console.log(values);
        const selectedIndex = cards.reduce((acc, curr, i) => cards[acc].id == values.id ? acc : i, 0);
        // console.log(selectedIndex);
        const newCards = [...cards];
        newCards[selectedIndex].title=values.title;
        newCards[selectedIndex].body=values.body;
        localStorage.setItem("cards", JSON.stringify(newCards));
        setCards(newCards);

    }
    return (
        <div>
            {cards.map(card=> <Card key={card.id} cardData={card} deleteCard={deleteCard} updateCard={updateCard}/>)}
        </div>
    );
}

export default CardList;
