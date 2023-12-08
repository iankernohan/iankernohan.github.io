import Game from "./Game";
import Sqaure from "./Sqaure";
import { MinesweeperProvider, useMinesweeper } from "./Context";
import { useEffect, useState } from "react";

function Minesweeper() {
  const boardSize = 10;
  const bombCount = 20;
  const bombSpots = [];

  const [board, setBoard] = useState([]);
  const [startOver, setStartOver] = useState(true);

  useEffect(() => {
    createBoard();
    createBombs();
  }, [startOver]);

  function createBoard() {
    const newBoard = [];
    for (let i = 0; i < boardSize; i++) {
      const row = [];
      for (let j = 0; j < boardSize; j++) {
        const index = String(i) + String(j);
        row.push(
          <Sqaure
            key={Math.random()}
            index={index}
            bombSpots={bombSpots}
            boardSize={boardSize}
            board={board}
          />
        );
      }
      newBoard.push(row);
    }
    setBoard(newBoard);
  }

  function createBombs() {
    while (bombSpots.length < bombCount) {
      const randIndex = Math.floor(Math.random() * boardSize ** 2);
      if (!bombSpots.includes(String(randIndex))) {
        if (randIndex < 10) {
          bombSpots.push("0" + String(randIndex));
        } else {
          bombSpots.push(String(randIndex));
        }
      }
    }
    console.log(bombSpots);
  }

  console.log("Minesweeper.jsx rendered");

  return (
    <MinesweeperProvider>
      <Game
        board={board}
        setStartOver={setStartOver}
        bombSpots={bombSpots}
        bombCount={bombCount}
      />
    </MinesweeperProvider>
  );
}

export default Minesweeper;
