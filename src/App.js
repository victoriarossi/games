import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import Sudoku from "./pages/Sudoku";
import Hangman from "./pages/Hangman";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/sudoku" element={<Sudoku />} />
          <Route path="/hangman" element={<Hangman />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
