import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../css/Sudoku.css';
import { Link } from "react-router-dom";


export default function Sudoku() {
    const [board, setBoard] = useState(Array(9).fill().map(()=>Array(9).fill(null)));
    const [start, setStart] = useState(true);

    useEffect(() => {
      if (start) {
        loadSudokuBoard();
        setStart(false);
      }
    }, [start]);

    function loadSudokuBoard() {
        const sample = require('./sudoku_board.json'); 
        console.log(sample.board);
        const newBoard = [...board];
        for (let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++){
                if(sample.board[i][j] !== 0){
                    newBoard[i][j] = sample.board[i][j];
                } else {
                    newBoard[i][j] = null;
                }
            }
        }
        setBoard(newBoard);
    }

    function renderSquare(row, col) {
        const isPredefined = (board[row][col] !== null);
        const squareClass = isPredefined ? 'predefined-square' : 'square';
      
        return (
          <button className={squareClass} onClick={() => handleSquareClick(row, col)}>
            {board[row][col]}
          </button>
        );
      }
    
    function handleSquareClick(row, col) {
        // Implement adding a number to the board
    }

    return (
        <>
            <Link to="/" className='no-underline'>
                <a class="btn disabled back_btn"> <i class="material-icons">arrow_back</i></a>
            </Link>
            <Header name="Sudoku" />
            <div className='game'>
                <div className="board">
                    <div className="board-col">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(row => (
                            <div key={row} className="board-row">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(col => renderSquare(row, col))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="numbers">
                    <div className="rows"> 
                    {[1, 2, 3].map((number, index) => (
                        <React.Fragment key={number}>
                        <button className="number" onClick={() => {}}>
                            {number}
                        </button>
                        </React.Fragment>
                    ))}
                    </div>
                    <div className="rows"> 
                    {[4, 5, 6].map((number, index) => (
                        <React.Fragment key={number}>
                        <button className="number" onClick={() => {}}>
                            {number}
                        </button>
                        </React.Fragment>
                    ))}
                    </div>
                    <div className="rows"> 
                    {[7, 8, 9].map((number, index) => (
                        <React.Fragment key={number}>
                        <button className="number" onClick={() => {}}>
                            {number}
                        </button>
                        </React.Fragment>
                    ))}
                    </div>
                    </div>
            </div>
        </>
    );
}