import { useEffect, useState } from "react";

export default function Sqaure({
  index,
  bombSpots,
  bombsAround,
  emptySpots,
  revealedSpots,
  isPlaying,
  dispatch,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const [isABomb, setIsABomb] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const [numColor, setNumColor] = useState({});
  const numIndex = parseInt(index);

  useEffect(() => {
    determineNumColor(bombsAround);
  }, [bombsAround]);

  useEffect(() => {
    if (revealedSpots.includes(numIndex)) {
      setIsSelected(true);
    }
  }, [revealedSpots, numIndex]);

  //Determine Square styles based on weather it has been selected or not or is a bomb
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
      dispatch({ type: "revealSpots", payload: [Number(index)] });
      if (bombSpots.includes(index)) {
        console.log("Is a bomb");
        setIsABomb(true);
        dispatch({ type: "gameOver" });
        return;
      }
      setIsSelected(true);
      !bombsAround &&
        dispatch({
          type: "revealSpots",
          payload: emptySpots,
        });
      isMarked && dispatch({ type: "changeBombCount", payload: 1 });
      setIsMarked(false);
      dispatch({ type: "checkWin" });
    }
  }

  function markSquare() {
    if (isPlaying && !isSelected) {
      setIsMarked((curr) => !curr);
      isMarked
        ? dispatch({ type: "changeBombCount", payload: 1 })
        : dispatch({ type: "changeBombCount", payload: -1 });
      dispatch({ type: "checkWin" });
    }
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
