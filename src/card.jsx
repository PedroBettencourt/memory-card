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

function Game({score, setScore, bestScore, setBestScore}) {
    
    const [cards, setCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);

    useEffect(() => {
        const newCards = [];

        // Fetch the plant data
        async function fetchData() {
            const url = 'https://perenual.com/api/v2/species-list?key=sk-a4BP680eb60d6c1ad10066'
            const response = await fetch(url);
            if (!response.ok) throw new Error("Response not ok");
            
            const json = await response.json();
            const data = await json.data;

            for (let i = 0; i < 10; i++) {
                const title = data[i].common_name;
                const image = data[i].default_image.original_url
                const id = crypto.randomUUID();
    
                newCards.push({id: id, title: title, image: image});
            }
            setCards(newCards);        
        }

        fetchData()

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
        </div>
    )
}

export default Game;