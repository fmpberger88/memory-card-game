import './App.css'
import GameBoard from "./components/GameBoard.jsx";

function App() {

  return (
      <>
          <div className="content">
              <h1>Memory Card</h1>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>Click the cards to raise your score, but don't click the same card twice!</p>
          </div>
          <div>
              <GameBoard />
          </div>
      </>
  )
}

export default App
