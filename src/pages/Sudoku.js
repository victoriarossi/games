import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import '../css/Sudoku.css';
import { Link } from "react-router-dom";
import _ from 'lodash'; // Import lodash library for deep copy

export default function Sudoku() {
    const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill(null)));
    const [start, setStart] = useState(true);
    const [boardNumber, setBoardNumber] = useState(0);
    const [numberClicked, setNumberClicked] = useState(null);
    let end = false;
    let gameover;

    const sample = require('../server/sudoku_board.json');
    const solutions = sample.solutions;
    let originalBoard = useRef(_.cloneDeep(sample.boards[boardNumber]));

    useEffect(() => {
        if (start) {
            loadSudokuBoard();
            setStart(false);
        }
    }, [start]);

    useEffect(() => {
        loadSudokuBoard();
    }, [boardNumber]);

    function loadSudokuBoard() {
        const board = sample.boards[boardNumber];
        const newBoard = [...board];
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== 0) {
                    newBoard[i][j] = board[i][j];
                } else {
                    newBoard[i][j] = null;
                }
            }
        }
        setBoard(newBoard);
        console.log("Original board")
        console.log(originalBoard);
    }

    function getRandomInt() {
        return Math.floor(Math.random() * 20);
    }

    function generateBoard() {
        let index = getRandomInt();
        while (index === boardNumber) {
            index = getRandomInt();
        }
        originalBoard.current = _.cloneDeep(sample.boards[index]);
        setBoardNumber(index);
    }

    function renderSquare(row, col) {
        const isPredefined = (originalBoard.current[row][col] !== 0);
        const squareClass = isPredefined ? 'predefined-square' : 'square';

        return (
            <button className={squareClass} onClick={() => handleSquareClick(row, col)}>
                {board[row][col]}
            </button>
        );
    }

    function handleNumberClick(number) {
        setNumberClicked(number);
    }
    
    function handleSquareClick(row, col) {
        // Implement adding a number to the board
        const isPredefined = (originalBoard.current[row][col] !== 0);
        if (numberClicked !== null && !isPredefined) {
            const newBoard = [...board];
            newBoard[row][col] = numberClicked;
            setBoard(newBoard);
        }
    }

    // Check if board is solved
    console.log("Checking if solved")
    console.log(board)
    if (isSolved()) {
        end = true;
        gameover = (
            <React.Fragment>
                Congratulations, 
                You won!!!
            </React.Fragment>
        );
    }

    function isSolved() {
        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++){
                const isPredefined = (originalBoard.current[i][j] !== 0);
                if(isPredefined)
                    continue;
                if(board[i][j] !== solutions[boardNumber][i][j]){
                    return false;
                }
            }
        }
        console.log("Solved board")
        console.log(board);
        return true;
    }

    return (
        <>
            <Link to="/" className='no-underline'>
                <a class="btn disabled back_btn"> <i class="material-icons">arrow_back</i></a>
            </Link>
            <Header name="Sudoku" />
            <div className='game'>
            <button className="generate-board-btn" onClick={generateBoard}>Generate new board</button>
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
                        <button className="number" onClick={() => {handleNumberClick(number)}}>
                            {number}
                        </button>
                        </React.Fragment>
                    ))}
                    </div>
                    <div className="rows"> 
                    {[4, 5, 6].map((number, index) => (
                        <React.Fragment key={number}>
                        <button className="number" onClick={() => {handleNumberClick(number)}}>
                            {number}
                        </button>
                        </React.Fragment>
                    ))}
                    </div>
                    <div className="rows"> 
                    {[7, 8, 9].map((number, index) => (
                        <React.Fragment key={number}>
                        <button className="number" onClick={() => {handleNumberClick(number)}}>
                            {number}
                        </button>
                        </React.Fragment>
                    ))}
                    </div>
                    </div>
                    <div>
                        {end && <h1 className="game-over">{gameover}</h1>}
                    </div>
            </div>
        </>
    );
}