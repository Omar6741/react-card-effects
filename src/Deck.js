

function Deck() {
    const URL = https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2;
    const[cards, setCards] = useState([]);

    function handleClick(evt) {
        evt.preventDefault()
        const cardResult = await axios.get(URL);
        setCards(cards => [...cards, cardResult]);
    }


    
    
    return <div>
             {cards.map(c => {
             <div>{c}</div>;
             }
            <button onClick = {handleClick}> New Card!</button>
            <button>New Deck!</button> 
           </div>
}

// useEffect(function newCardWhenRendered() {
    //     async function newCard() {
    //       const cardResult = await axios.get(URL);
    //       setProfile(userResult.data);
    //       setIsLoading(false);
    //     }
    //     fetchUser();
    //   }, [ ]);
