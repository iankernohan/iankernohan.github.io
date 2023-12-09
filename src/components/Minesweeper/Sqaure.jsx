import { useEffect, useState } from "react";

export default function Sqaure({
  index,
  bombSpots,
  boardSize,
  isPlaying,
  dispatch,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const [isABomb, setIsABomb] = useState(false);
  const [bombsAround, setBombsAround] = useState(0);
  const [isMarked, setIsMarked] = useState(false);
  const [numColor, setNumColor] = useState({});

  const shiftNums = [
    1,
    -1,
    boardSize,
    -boardSize,
    boardSize + 1,
    -(boardSize + 1),
    boardSize - 1,
    -(boardSize - 1),
  ];

  useEffect(() => {
    const numBombs = numBombsAround(index);
    determineNumColor(numBombs);
    setBombsAround(numBombs);
  }, []);

  let squareStlyes = {};
  if (isMarked) {
    squareStlyes = { backgroundImage: "url(./flag.png)" };
  } else if (isSelected && isABomb) {
    squareStlyes = {
      backgroundColor: "red",
      backgroundImage: "url(./bomb.png)",
    };
  } else if (isSelected) {
    squareStlyes = {
      backgroundColor: "white",
      border: "4.5px solid white",
    };
  }
  function determineNumColor(num) {
    if (num == 1) {
      setNumColor({ color: "blue" });
    }
    if (num == 2) {
      setNumColor({ color: "green" });
    }
    if (num == 3) {
      setNumColor({ color: "red" });
    }
    if (num == 4) {
      setNumColor({ color: "darkblue" });
    }
    if (num == 5) {
      setNumColor({ color: "darkred" });
    }
    if (num == 6) {
      setNumColor({ color: "cyan" });
    }
    if (num == 7) {
      setNumColor({ color: "black" });
    }
    if (num == 8) {
      setNumColor({ color: "grey" });
    }
  }

  function squareSelect() {
    if (isPlaying) {
      if (bombSpots.includes(index)) {
        console.log("Is a bomb");
        setIsABomb(true);
        dispatch({ type: "gameOver" });
      }
      setIsSelected(true);
      // openEmptySpace();
      isMarked && dispatch({ type: "changeBombCount", payload: 1 });
      setIsMarked(false);
    }
  }

  function markSquare() {
    if (isPlaying && !isSelected) {
      setIsMarked((curr) => !curr);
      isMarked
        ? dispatch({ type: "changeBombCount", payload: 1 })
        : dispatch({ type: "changeBombCount", payload: -1 });
    }
  }

  function numBombsAround(index) {
    let numBombs = 0;
    for (let num of shiftNums) {
      let spot = String(Number(index) + num);
      if (spot < 10) spot = "0" + spot;
      if (
        index[1] === "0" &&
        (num === -1 || num === -(boardSize + 1) || num === boardSize - 1)
      ) {
        numBombs += 0;
      } else if (
        index[1] === "9" &&
        (num === 1 || num === -(boardSize - 1) || num === boardSize + 1)
      ) {
        numBombs += 0;
      } else if (bombSpots.includes(spot)) {
        numBombs += 1;
      }
    }
    return numBombs;
  }

  return (
    <div
      className="square"
      onClick={markSquare}
      onDoubleClick={squareSelect}
      style={{ ...squareStlyes, ...numColor }}
    >
      {isABomb || bombsAround === 0 ? null : isSelected && bombsAround}
    </div>
  );
}

// function openEmptySpace() {
//   if (!bombsAround) {
//     let openSpaces = [Number(index)];
//     for (let space of openSpaces) {
//       for (let num of shiftNums) {
//         let spot = space + num;
//         if (!numBombsAround(spot)) {
//           spot = String(spot);
//           const square = board[spot[0]][spot[1]];
//           console.log(square);
//           openSpaces.push(spot);
//         }
//       }
//       openSpaces = openSpaces.filter((i) => i !== space);
//     }
//   }
// }
