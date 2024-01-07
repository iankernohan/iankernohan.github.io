import "./Minesweeper.css";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import GameOver from "./GameOver";

export default function Game({
  board,
  boardSize,
  bombsRemaining,
  isPlaying,
  dispatch,
  time,
  win,
}) {
  const navigate = useNavigate();

  return (
    <div className="minesweeper">
      <div className="minesweeper-header">
        <h1>Minesweeper</h1>
        {isPlaying && (
          <div>
            <h2>
              Time <Timer dispatch={dispatch} time={time} />
            </h2>
            <h2>Bombs {bombsRemaining}</h2>
          </div>
        )}
      </div>

      <section className="gameboard-container">
        <div
          className="gameboard"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
            gridTemplateRows: `repeat(${boardSize}, 1fr)`,
          }}
        >
          {board}
        </div>
      </section>

      <div className="minesweeper-footer">
        <button className="button-outline" onClick={() => navigate(-1)}>
          Back
        </button>

        <div>
          <ul>
            <li>Click on a square to mark it as a mine</li>
            <li>Double Click to reveal what's underneath...</li>
          </ul>
        </div>

        <button
          className="button"
          onClick={() => dispatch({ type: "startOver" })}
        >
          restart
        </button>
      </div>
      {!isPlaying && (
        <GameOver win={win} time={time} bombsRemaining={bombsRemaining} />
      )}
    </div>
  );
}
