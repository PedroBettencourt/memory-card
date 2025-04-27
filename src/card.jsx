import { useEffect, useState } from "react";
import "./card.css"

function Card({id, title, image, handleClick}) {
    return (
        <div className="card" onClick={() => handleClick(id)}>
            <img src={image} alt="" />
            <h3>{title}</h3>
        </div>
    )
}

function Game() {
    
    const [cards, setCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        const newCards = [];
        for (let i = 0; i < 3; i++) {
            //const flower = fetch() //api key sk-a4BP680eb60d6c1ad10066 perenual.com
            const title = "a";
            const image = "b";
            //newCards.push({id: crypto.randomUUID(), title: title, image: image});
            const id = crypto.randomUUID();
            newCards.push({id: id, title: id.slice(0,4), image: image}); // CHANGE THIS -- Just testing reorder
        }
        setCards(newCards);        
        return;
    }, []);

    function handleClick(clickedId) {
        const clicked = clickedCards.find(id => id === clickedId);
        if (clicked)  {
            if (score > bestScore) setBestScore(score);
            setScore(0);
            setClickedCards([])
        } else {
            setClickedCards([...clickedCards, clickedId]);
            setScore(score + 1);
        }
        // Sort cards randomly
        cards.sort(() => 0.5 - Math.random());
    }


    return (
        <div className="game">
            {cards.map((card) => <Card key={card.id} id={card.id} title={card.title} image={card.image} handleClick={handleClick} />)}

            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}

export default Game;