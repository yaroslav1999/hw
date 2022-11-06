import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardAdd from './card/card-add';
import CardList from './card/card-list';
import cardData from "./cardData";
import Header from './components/header';
import CardContext from './contexts/cardContext';
import Album from './pages/album';
import AlbumsList from './pages/albums-list';

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
    
    
    <CardContext.Provider value={[cards, setCards]}>
      <Header/>
      <Routes>
        <Route path='/' element={
          <div className="container">
            <CardList />
            <div className="rside">
              <CardAdd add2cart={add2cart}/>
            </div>
          </div>
        }/>

        <Route path='/albums' element={
          <div className="container">
            <AlbumsList/>
          </div>
        }/>
         <Route path='/album/:id' element={
          <div className="container">
            <Album/>
          </div>
        }/>
        <Route path='*' element={
          <div>
            <h1>Page not found</h1>
          </div>
        }/>
          

        
      </Routes>
        
    </CardContext.Provider>
    
    
  );
}

export default App;
