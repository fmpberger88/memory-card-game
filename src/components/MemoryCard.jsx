import {MemoryCardsContainer, MemoryCards, Card, CardFront, CardBack} from "../styles.jsx";

const MemoryCard = ({ cards, onCardClick }) => {
    return (
        <MemoryCardsContainer>
            {cards.map(card => (
                <MemoryCards key={card.id} onClick={() => onCardClick(card)} flipped={card.flipped}>
                    <Card flipped={card.flipped}>
                        <CardBack />
                        <CardFront>
                            <img src={card.image} alt={card.name} style={{ borderRadius: '8px', width: '90%' }} />
                            <p>{card.name}</p>
                        </CardFront>
                    </Card>
                </MemoryCards>
            ))}
        </MemoryCardsContainer>
    );
}

export default MemoryCard;