import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import { lazy, Suspense } from "react";

const Minesweeper = lazy(() => import("./components/Minesweeper/Minesweeper"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading Mineseeper...</div>}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="minesweeper" element={<Minesweeper />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
