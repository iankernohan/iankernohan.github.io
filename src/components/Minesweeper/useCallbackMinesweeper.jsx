import Game from "./Game";
import Sqaure from "./Sqaure";
import { useCallback, useEffect, useMemo, useReducer } from "react";

const initialState = {
  boardSize: 10,
  bombCount: 20,
  bombsRemaining: 20,
  bombSpots: [],
  revealedSpots: [],
  board: [],
  startOver: false,
  isPlaying: true,
  time: 0,
  win: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "createBoard":
      console.log("done loading");
      return {
        ...state,
        board: action.payload,
      };
    case "createBombSpots":
      return {
        ...state,
        bombSpots: action.payload,
      };
    case "changeBombCount":
      return {
        ...state,
        bombsRemaining: state.bombsRemaining + action.payload,
      };
    case "revealSpots":
      return {
        ...state,
        revealedSpots: [
          ...state.revealedSpots,
          ...action.payload.filter((num) =>
            state.revealedSpots.includes(num) ? null : num
          ),
        ],
      };
    case "incrementTimer":
      return {
        ...state,
        time: state.time + 1,
      };
    case "loading":
      console.log("loading");
      return {
        ...state,
        isLoading: true,
      };
    case "checkWin":
      if (
        state.bombCount === 0 &&
        state.revealedSpots.length ===
          state.boardSize ** 2 - initialState.bombCount
      ) {
        clearInterval(state.timerID);
        return {
          ...state,
          win: true,
          isPlaying: false,
          timerID: null,
        };
      }
      return { ...state };
    case "gameOver":
      clearInterval(state.timerID);
      return {
        ...state,
        isPlaying: false,
        timerID: null,
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
        // if (Number(spot) < 10) spot = "0" + spot;
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
              //Checked if Square is in leftmost column
              space % boardSize === 1 &&
              (num === -1 || num === -(boardSize + 1) || num === boardSize - 1)
            ) {
              //pass
            } else if (
              //Checks if Square is in rightmost column
              space % boardSize === 0 &&
              (num === 1 || num === -(boardSize - 1) || num === boardSize + 1)
            ) {
              //pass
            } else {
              //Adds Square to array if it has no bombs around
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
          // openSpaces = openSpaces.filter((i) => i !== space);
          openSpaces.splice(openSpaces.indexOf(space), 1);
        }

        const newBombsAround = [...bombsAround];
        //Includes Sqaures in the array that are adjacent to the Sqaures with no bombs around them
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

//
//
//
//
//

// import Game from "./Game";
// import Sqaure from "./Sqaure";
// import { useEffect, useReducer } from "react";

// const initialState = {
//   boardSize: 10,
//   bombCount: 20,
//   bombSpots: [],
//   revealedSpots: [],
//   board: [],
//   startOver: false,
//   isPlaying: true,
//   time: 0,
//   win: false,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "createBoard":
//       console.log("done loading");
//       return {
//         ...state,
//         board: action.payload,
//       };
//     case "createBombSpots":
//       return {
//         ...state,
//         bombSpots: action.payload,
//       };
//     case "changeBombCount":
//       return {
//         ...state,
//         bombCount: state.bombCount + action.payload,
//       };
//     case "revealSpots":
//       return {
//         ...state,
//         revealedSpots: [
//           ...state.revealedSpots,
//           ...action.payload.filter((num) =>
//             state.revealedSpots.includes(num) ? null : num
//           ),
//         ],
//       };
//     case "incrementTimer":
//       return {
//         ...state,
//         time: state.time + 1,
//       };
//     case "loading":
//       console.log("loading");
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case "checkWin":
//       if (
//         state.bombCount === 0 &&
//         state.revealedSpots.length ===
//           state.boardSize ** 2 - initialState.bombCount
//       ) {
//         clearInterval(state.timerID);
//         return {
//           ...state,
//           win: true,
//           isPlaying: false,
//           timerID: null,
//         };
//       }
//       return { ...state };
//     case "gameOver":
//       clearInterval(state.timerID);
//       return {
//         ...state,
//         isPlaying: false,
//         timerID: null,
//       };
//     case "startOver":
//       return {
//         ...initialState,
//         startOver: !state.startOver,
//       };
//     default:
//       throw new Error("Unknown Action");
//   }
// }

// function Minesweeper() {
//   const [
//     {
//       boardSize,
//       bombCount,
//       bombSpots,
//       revealedSpots,
//       board,
//       startOver,
//       isPlaying,
//       time,
//       win,
//     },
//     dispatch,
//   ] = useReducer(reducer, initialState);

//   const shiftNums = [
//     1,
//     -1,
//     boardSize,
//     -boardSize,
//     boardSize + 1,
//     -(boardSize + 1),
//     boardSize - 1,
//     -(boardSize - 1),
//   ];

//   useEffect(() => {
//     initGame();
//   }, [startOver]);

//   //Resets board to give Square access to revealedSpots
//   useEffect(() => {
//     const newBoard = createBoard(bombSpots);
//     dispatch({ type: "createBoard", payload: newBoard });
//   }, [revealedSpots, bombSpots, isPlaying]);

//   async function initGame() {
//     dispatch({ type: "loading" });
//     const bombSpots = await createBombs();
//     const newBoard = createBoard(bombSpots);
//     dispatch({ type: "createBoard", payload: newBoard });
//   }

//   //Creates a matrix of Squares
//   function createBoard(bombSpots) {
//     const newBoard = [];
//     let count = 1;
//     for (let i = 0; i < boardSize; i++) {
//       const row = [];
//       for (let j = 0; j < boardSize; j++) {
//         const index = String(count);
//         const bombsAround = numBombsAround(index, bombSpots);
//         const emptySpots = emptySpaceAround(index, bombSpots);
//         row.push(
//           <Sqaure
//             key={index}
//             index={index}
//             bombSpots={bombSpots}
//             bombsAround={bombsAround}
//             emptySpots={emptySpots}
//             revealedSpots={revealedSpots}
//             isPlaying={isPlaying}
//             dispatch={dispatch}
//           />
//         );
//         count += 1;
//       }
//       newBoard.push(row);
//     }
//     return newBoard;
//   }

//   //Randomly generates 20 unique indexes of Square matrix
//   async function createBombs() {
//     const newBombSpots = [];
//     while (newBombSpots.length < bombCount) {
//       const randIndex = Math.floor(Math.random() * boardSize ** 2) + 1;
//       if (!newBombSpots.includes(String(randIndex))) {
//         newBombSpots.push(String(randIndex));
//       }
//     }
//     dispatch({ type: "createBombSpots", payload: newBombSpots });
//     return newBombSpots;
//   }

//   //Returns an array of Sqaures to be automatically selected around a specific Square
//   function emptySpaceAround(index, bombSpots) {
//     const numBombs = numBombsAround(index, bombSpots);
//     const numIndex = parseInt(index);
//     if (numBombs === 0) {
//       const bombsAround = [numIndex];
//       const openSpaces = [numIndex];
//       //Looks at 8 surrounding Square
//       for (let space of openSpaces) {
//         for (let num of shiftNums) {
//           if (
//             //Checked if Square is in leftmost column
//             space % boardSize === 1 &&
//             (num === -1 || num === -(boardSize + 1) || num === boardSize - 1)
//           ) {
//             //pass
//           } else if (
//             //Checks if Square is in rightmost column
//             space % boardSize === 0 &&
//             (num === 1 || num === -(boardSize - 1) || num === boardSize + 1)
//           ) {
//             //pass
//           } else {
//             //Adds Square to array if it has no bombs around
//             let spot = space + num;
//             if (numBombsAround(spot, bombSpots) === 0) {
//               if (spot > 0 && spot <= boardSize ** 2) {
//                 if (!bombsAround.includes(spot)) {
//                   bombsAround.push(spot);
//                   openSpaces.push(spot);
//                 }
//               }
//             }
//           }
//         }
//         // openSpaces = openSpaces.filter((i) => i !== space);
//         openSpaces.splice(openSpaces.indexOf(space), 1);
//       }

//       const newBombsAround = [...bombsAround];
//       //Includes Sqaures in the array that are adjacent to the Sqaures with no bombs around them
//       for (let space of bombsAround) {
//         for (let num of shiftNums) {
//           if (
//             space % boardSize === 1 &&
//             (num === -1 || num === -(boardSize + 1) || num === boardSize - 1)
//           ) {
//             //pass
//           } else if (
//             space % boardSize === 0 &&
//             (num === 1 || num === -(boardSize - 1) || num === boardSize + 1)
//           ) {
//             //pass
//           } else {
//             let spot = space + num;
//             if (spot > 0 && spot <= boardSize ** 2) {
//               if (!newBombsAround.includes(spot) && !bombSpots.includes(space))
//                 newBombsAround.push(spot);
//             }
//           }
//         }
//       }

//       return newBombsAround;
//     }
//     return [];
//   }

//   //Returns the number of bombs surrounding a specified Square index
//   function numBombsAround(index, bombSpots) {
//     let numBombs = 0;
//     for (let num of shiftNums) {
//       let spot = String(Number(index) + num);
//       // if (Number(spot) < 10) spot = "0" + spot;
//       if (
//         index % boardSize === 1 &&
//         (num === -1 || num === -(boardSize + 1) || num === boardSize - 1)
//       ) {
//         numBombs += 0;
//       } else if (
//         index % boardSize === 0 &&
//         (num === 1 || num === -(boardSize - 1) || num === boardSize + 1)
//       ) {
//         numBombs += 0;
//       } else if (bombSpots.includes(spot)) {
//         numBombs += 1;
//       }
//     }
//     return numBombs;
//   }

//   return (
//     <Game
//       board={board}
//       boardSize={boardSize}
//       bombCount={bombCount}
//       isPlaying={isPlaying}
//       dispatch={dispatch}
//       time={time}
//       win={win}
//     />
//   );
// }

// export default Minesweeper;
