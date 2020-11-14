import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./Card";

function Deck() {
  const URL_BASE_API = `https://deckofcardsapi.com/api/`
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [remaining, setRemaining] = useState(52);
  console.log("RENDEREDDDD");
  console.log("CARDSSSSS", cards);
  console.log("REMAININGGGGG", remaining);


  useEffect(function getNewDeckWhenMounted() {
    async function fetchDeck() {
      const deckResult = await axios.get(`${URL_BASE_API}deck/new/`);
      setDeck(deckResult.data);
    }
    fetchDeck();
  }, []);


  async function handleClick(evt) {
    evt.preventDefault();

    const cardResult = await axios.get(`${URL_BASE_API}/deck/${deck.deck_id}/draw/?count=1`);
    
    setCards(cards => [...cards, cardResult.data.cards[0]]);
    setRemaining(cardResult.data.remaining);

  }

  if(!remaining){
    alert("Error: no cards remaining!");
  }

  return (
  <div>
    <div>
      <button onClick={handleClick} disabled={!remaining}> New Card!</button>
    </div>
    <div>
      { cards.map((card) => (
        <Card key={card.code} image={card.image} code={card.code} />
      ))}
    </div>

  </div>
  )
}

export default Deck


