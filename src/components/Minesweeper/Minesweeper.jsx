import { useCallback, useEffect, useMemo, useReducer } from "react";
import Game from "./Game";
import Sqaure from "./Sqaure";
import { reducer, initialState } from "./reducerLogic";

function Minesweeper() {
  const [
    {
      boardSize,
      bombCount,
      bombSpots,
      bombsRemaining,
      revealedSpots,
      board,
      startOver,
      isPlaying,
      time,
      win,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const shiftNums = useMemo(() => {
    return [
      1,
      -1,
      boardSize,
      -boardSize,
      boardSize + 1,
      -(boardSize + 1),
      boardSize - 1,
      -(boardSize - 1),
    ];
  }, [boardSize]);

  //Returns the number of bombs surrounding a specified Square index
  const numBombsAround = useCallback(
    (index, bombSpots) => {
      let numBombs = 0;
      for (let num of shiftNums) {
        let spot = String(Number(index) + num);
        if (
          index % boardSize === 1 &&
          (num === -1 || num === -(boardSize + 1) || num === boardSize - 1)
        ) {
          numBombs += 0;
        } else if (
          index % boardSize === 0 &&
          (num === 1 || num === -(boardSize - 1) || num === boardSize + 1)
        ) {
          numBombs += 0;
        } else if (bombSpots.includes(spot)) {
          numBombs += 1;
        }
      }
      return numBombs;
    },
    [boardSize, shiftNums]
  );

  //Returns an array of Sqaures to be automatically selected around a specific Square
  const emptySpaceAround = useCallback(
    (index, bombSpots) => {
      const numBombs = numBombsAround(index, bombSpots);
      const numIndex = parseInt(index);
      if (numBombs === 0) {
        const bombsAround = [numIndex];
        const openSpaces = [numIndex];
        //Looks at 8 surrounding Square
        for (let space of openSpaces) {
          for (let num of shiftNums) {
            if (
              space % boardSize === 1 &&
              (num === -1 || num === -(boardSize + 1) || num === boardSize - 1)
            ) {
              //pass
            } else if (
              space % boardSize === 0 &&
              (num === 1 || num === -(boardSize - 1) || num === boardSize + 1)
            ) {
              //pass
            } else {
              let spot = space + num;
              if (numBombsAround(spot, bombSpots) === 0) {
                if (spot > 0 && spot <= boardSize ** 2) {
                  if (!bombsAround.includes(spot)) {
                    bombsAround.push(spot);
                    openSpaces.push(spot);
                  }
                }
              }
            }
          }
          openSpaces.splice(openSpaces.indexOf(space), 1);
        }

        //Includes Sqaures in the array that are adjacent to the Sqaures with no bombs around them
        const newBombsAround = [...bombsAround];
        for (let space of bombsAround) {
          for (let num of shiftNums) {
            if (
              space % boardSize === 1 &&
              (num === -1 || num === -(boardSize + 1) || num === boardSize - 1)
            ) {
              //pass
            } else if (
              space % boardSize === 0 &&
              (num === 1 || num === -(boardSize - 1) || num === boardSize + 1)
            ) {
              //pass
            } else {
              let spot = space + num;
              if (spot > 0 && spot <= boardSize ** 2) {
                if (
                  !newBombsAround.includes(spot) &&
                  !bombSpots.includes(space)
                )
                  newBombsAround.push(spot);
              }
            }
          }
        }

        return newBombsAround;
      }
      return [];
    },
    [boardSize, numBombsAround, shiftNums]
  );

  //Creates a matrix of Squares
  const createBoard = useCallback(
    (bombSpots) => {
      const newBoard = [];
      let count = 1;
      for (let i = 0; i < boardSize; i++) {
        const row = [];
        for (let j = 0; j < boardSize; j++) {
          const index = String(count);
          const bombsAround = numBombsAround(index, bombSpots);
          const emptySpots = emptySpaceAround(index, bombSpots);
          row.push(
            <Sqaure
              key={index}
              index={index}
              bombSpots={bombSpots}
              bombsAround={bombsAround}
              emptySpots={emptySpots}
              revealedSpots={revealedSpots}
              isPlaying={isPlaying}
              dispatch={dispatch}
            />
          );
          count += 1;
        }
        newBoard.push(row);
      }
      return newBoard;
    },
    [boardSize, emptySpaceAround, isPlaying, numBombsAround, revealedSpots]
  );

  //Randomly generates 20 unique indexes of Square matrix
  const createBombs = useCallback(() => {
    const newBombSpots = [];
    while (newBombSpots.length < bombCount) {
      const randIndex = Math.floor(Math.random() * boardSize ** 2) + 1;
      if (!newBombSpots.includes(String(randIndex))) {
        newBombSpots.push(String(randIndex));
      }
    }
    dispatch({ type: "createBombSpots", payload: newBombSpots });
    return newBombSpots;
  }, [boardSize, bombCount]);

  useEffect(() => {
    createBombs();
  }, [startOver, createBombs]);

  useEffect(() => {
    const newBoard = createBoard(bombSpots);
    dispatch({ type: "createBoard", payload: newBoard });
  }, [revealedSpots, bombSpots, isPlaying, createBoard]);

  return (
    <Game
      board={board}
      boardSize={boardSize}
      bombsRemaining={bombsRemaining}
      isPlaying={isPlaying}
      dispatch={dispatch}
      time={time}
      win={win}
    />
  );
}

export default Minesweeper;
