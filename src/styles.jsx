/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const GameBoardContainer = styled.div`
    color: white; /* Adjust text color to ensure visibility */
    text-align: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.3); /* Optional: Add a semi-transparent background to improve text readability */
    border-radius: 10px; /* Optional: Add rounded corners */
    max-width: 80%; /* Optional: Limit the width of the content */
    margin: 50px auto; /* Center the content */
`

export const MemoryCardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
`;

export const MemoryCards = styled.div`
    display: flex;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    height: 180px;
    width: 120px;
    transition: transform 0.2s;
    cursor: pointer;
`;

export const Card = styled.div`
    width: 120px;
    height: 160px;
    transform-style: preserve-3d;
    transition: transform 600ms;
    transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const CardFace = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 8px;
    color: black;
`;

export const CardBack = styled(CardFace)`
    background: #ccc;
    width: 100%;
`;

export const CardFront = styled(CardFace)`
    transform: rotateY(180deg);
`;