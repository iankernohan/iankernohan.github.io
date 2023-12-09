import "./Minesweeper.css";
import { useNavigate } from "react-router-dom";

export default function Game({
  board,
  boardSize,
  bombCount,
  isPlaying,
  dispatch,
}) {
  const navigate = useNavigate();

  return (
    <div className="minesweeper">
      <div className="minesweeper-header">
        <h2>
          <div>000</div>
          <div>Time</div>
        </h2>
        <h1>Minesweeper</h1>
        <h2>
          <div>{bombCount}</div>
          <div>Bombs</div>
        </h2>
      </div>

      <section
        className="gameboard"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
          gridTemplateRows: `repeat(${boardSize}, 1fr)`,
          width: "75%",
          aspectRatio: "1",
        }}
      >
        {board}
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
        <div>
          <h2>Game Over</h2>
        </div>
      )}
    </div>
  );
}
