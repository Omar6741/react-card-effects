 import React, {useState, useEffect} from 'react'
 import axios from 'axios'

function Deck() {
    const URL_BASE_API = `https://deckofcardsapi.com/api/`
    const [deck, setDeck] = useState(null);
    const[cards, setCards] = useState([]);
    console.log(cards);




    useEffect(function getNewDeckWhenMounted() {
        async function fetchDeck() {
          const deckResult = await axios.get(`${URL_BASE_API}deck/new/`);
          setDeck(deckResult.data);
          console.log(deckResult.data);

        //   setIsLoading(false);
        }
        fetchDeck();
      }, []);
    

    async function handleClick(evt) {
        evt.preventDefault()

        const cardResult = await axios.get(`${URL_BASE_API}/deck/${deck.deck_id}/draw/?count=1`);
        setCards(cards => [...cards, cardResult.data.cards[0].image]);
        
    }

    
    
    return <div>
    
            <button onClick = {handleClick}> New Card!</button>
            
           </div>
}

export default Deck

{/* {cards.map(c => {
             <div>{c}</div>;
             } */}

{/* <button>New Deck!</button>  */}

