import { useState } from 'react';
import './App.css';
import CardAdd from './card/card-add';
import CardList from './card/card-list';
import cardData from "./cardData";
import CardContext from './contexts/cardContext';

function App() {
  // const [cards, setCards] = useState(cardData);
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || cardData);

  const add2cart=(data)=>{
    // console.log(data);
    const newCards = [...cards, data];
    setCards(newCards);
    localStorage.setItem("cards", JSON.stringify(newCards));
  }
  
  return (
    
    <div className="container">
      <CardContext.Provider value={[cards, setCards]}>
        <CardList />
        <div className="rside">
          <CardAdd add2cart={add2cart}/>
        </div>
      </CardContext.Provider>
    </div>
    
  );
}

export default App;
