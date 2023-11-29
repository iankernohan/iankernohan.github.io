import { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
