import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import Contact from "./pages/Contact"; 
import Sudoku from "./pages/Sudoku";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sudoku" element={<Sudoku />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
