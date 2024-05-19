import { useEffect, useState } from 'react';
import MemoryCard from './MemoryCard';
import { fetchPokemonIds } from '../pokeApi.js';
import { GameBoardContainer } from '../styles.jsx';
import { shuffleArray } from '../utils';

const GameBoard = () => {
    const [cards, setCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPokemons = async () => {
            try {
                const pokemons = await fetchPokemonIds();
                setCards(pokemons.map((pokemon, index) => ({ ...pokemon, id: index, flipped: true })));
                await setLoading(false);
            } catch (error) {
                setError(error);
            }

        };

        loadPokemons();
    }, []);

    const handleCardClick = (clickedCard) => {
        if (isAnimating) return;

        if (clickedCards.includes(clickedCard.name)) {
            setGameOver(true);
        } else {
            setScore(score + 1);
            setClickedCards([...clickedCards, clickedCard.name]);

            setIsAnimating(true);

            // Flip all cards down
            setCards(cards.map(card => ({ ...card, flipped: false })));

            setTimeout(() => {
                // Shuffle cards
                const shuffledCards = shuffleArray(cards);
                // Flip all cards back up
                setCards(shuffledCards.map(card => ({ ...card, flipped: true })));
                setIsAnimating(false);
            }, 600); // Duration of the flip animation
        }
    };

    const resetGame = () => {
        setClickedCards([]);
        if (score > maxScore) {
            setMaxScore(score);
        }
        setScore(0);
        setGameOver(false);
        setCards(cards.map(card => ({ ...card, flipped: true })));
    };

    if (gameOver) {
        return (
            <GameBoardContainer>
                <h1>Game Over</h1>
                <p>Your score: {score}</p>
                <p>Your highest score: {maxScore}</p>
                <button onClick={resetGame}>Restart</button>
            </GameBoardContainer>
        );
    }

    if (loading) {
        return (
            <GameBoardContainer>
                <h1>Loading...</h1>
            </GameBoardContainer>
        )
    }

    return (
        <GameBoardContainer>
            <p>Score: {score}</p>
            <p>Highest Score: {maxScore}</p>
            <MemoryCard cards={cards} onCardClick={handleCardClick} />
        </GameBoardContainer>
    );
}

export default GameBoard;
