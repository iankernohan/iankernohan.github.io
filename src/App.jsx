import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import Minesweeper from "./components/Minesweeper/Minesweeper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="minesweeper" element={<Minesweeper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
