import { createContext, useContext, useState } from "react";

const MineSweeperContext = createContext();

function MinesweeperProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [bombCount, setBombCount] = useState(20);
  const [boardSize, setBoardSize] = useState(10);
  const [bombSpots, setBombSpots] = useState([]);

  return (
    <MineSweeperContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        bombCount,
        setBombCount,
        boardSize,
        setBoardSize,
        bombSpots,
        setBombSpots,
      }}
    >
      {children}
    </MineSweeperContext.Provider>
  );
}

function useMinesweeper() {
  const context = useContext(MineSweeperContext);
  if (context === undefined)
    throw new Error("useMinesweeper used outside of MineSweeperProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MinesweeperProvider, useMinesweeper };
