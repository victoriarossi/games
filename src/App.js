import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import Sudoku from "./pages/Sudoku";
import Hangman from "./pages/Hangman";
import ConnectFour from "./pages/ConnectFour";

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
          <Route path="/connectfour" element={<ConnectFour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
