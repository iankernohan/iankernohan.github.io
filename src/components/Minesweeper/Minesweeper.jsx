import Game from "./Game";
import Sqaure from "./Sqaure";
import { MinesweeperProvider } from "./Context";
import { useEffect, useReducer } from "react";

const initialState = {
  boardSize: 10,
  bombCount: 20,
  board: [],
  startOver: false,
  isPlaying: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "createBoard":
      return {
        ...state,
        board: action.payload,
      };
    case "changeBombCount":
      return {
        ...state,
        bombCount: state.bombCount + action.payload,
      };
    case "gameOver":
      return {
        ...state,
        isPlaying: false,
      };
    case "startOver":
      return {
        ...initialState,
        startOver: !state.startOver,
      };
    default:
      throw new Error("Unknown Action");
  }
}

function Minesweeper() {
  const [{ boardSize, bombCount, board, startOver, isPlaying }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    initGame();
  }, [startOver]);

  async function initGame() {
    const bombSpots = await createBombs();
    const newBoard = createBoard(bombSpots);
    dispatch({ type: "createBoard", payload: newBoard });
  }

  function createBoard(bombSpots) {
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
            isPlaying={isPlaying}
            dispatch={dispatch}
          />
        );
      }
      newBoard.push(row);
    }
    return newBoard;
  }

  async function createBombs() {
    const newBombSpots = [];
    while (newBombSpots.length < bombCount) {
      const randIndex = Math.floor(Math.random() * boardSize ** 2);
      if (!newBombSpots.includes(String(randIndex))) {
        if (randIndex < 10) {
          newBombSpots.push("0" + String(randIndex));
        } else {
          newBombSpots.push(String(randIndex));
        }
      }
    }
    return newBombSpots;
  }

  console.log("Minesweeper.jsx rendered");

  return (
    <Game
      board={board}
      boardSize={boardSize}
      bombCount={bombCount}
      isPlaying={isPlaying}
      dispatch={dispatch}
    />
  );
}

export default Minesweeper;
