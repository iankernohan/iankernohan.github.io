import { useEffect } from "react";
import "./Minesweeper.css";
import Sqaure from "./Sqaure";
import { Link } from "react-router-dom";
import { useMinesweeper } from "./Context";

export default function Game({ board, setStartOver }) {
  // const [isPlaying, setIsPlaying] = useState(true);
  // const [bombCount, setBombCount] = useState(20);

  // const boardSize = 10;
  // const board = [];
  // // const bombCount = 20;
  // const bombSpots = [];

  const {
    bombCount,
    setBombCount,
    isPlaying,
    boardSize,
    setBoardSize,
    setBombSpots,
    setIsPlaying,
  } = useMinesweeper();

  // useEffect(() => {
  //   createBombs();
  // }, [board]);

  // function createBoard() {
  //   for (let i = 0; i < boardSize; i++) {
  //     const row = [];
  //     for (let j = 0; j < boardSize; j++) {
  //       const index = String(i) + String(j);
  //       row.push(
  //         <Sqaure
  //           key={Math.random()}
  //           index={index}
  //           bombSpots={bombSpots}
  //           boardSize={boardSize}
  //           board={board}
  //         />
  //       );
  //     }
  //     board.push(row);
  //   }
  //   console.log("board created");
  // }
  // createBoard();

  // function createBombs() {
  //   while (bombSpots.length < bombCount) {
  //     const randIndex = Math.floor(Math.random() * boardSize ** 2);
  //     if (!bombSpots.includes(String(randIndex))) {
  //       if (randIndex < 10) {
  //         bombSpots.push("0" + String(randIndex));
  //       } else {
  //         bombSpots.push(String(randIndex));
  //       }
  //     }
  //   }
  //   console.log(bombSpots);
  // }

  function restart() {
    setStartOver((curr) => !curr);
    setIsPlaying(true);
  }

  console.log("Game.jsx rendered");

  return (
    <div className="minesweeper-container">
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      <div>
        <h1>Minesweeper</h1>
        <h2>Bombs: {bombCount}</h2>
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
      <p>Click to mark a square as a mine</p>
      <p>Double Click to select a square</p>
      <button onClick={restart}>restart</button>
      {!isPlaying && (
        <div>
          <h2>Game Over</h2>
        </div>
      )}
    </div>
  );
}
