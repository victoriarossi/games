import React, { useState } from 'react';
import Header from '../components/Header';
import '../css/TicTacToe.css';
import { Link } from "react-router-dom";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [players, setPlayers] = useState(2); // 1 = one player, 2 = two players. Default: 2
  let end = false;

  function makeMove(id) {
    if (!board[id] && !calculateWinner(board)) {
      const newBoard = [...board];
      newBoard[id] = currentPlayer;
      setBoard(newBoard);
      if(players === 2){
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      } else {
        makeMachineMove(newBoard);
      }
    }
  }

  function makeMachineMove(board) { // TODO: improve AI
    if (players === 1) {
      const newBoard = [...board];
      let id = Math.floor(Math.random() * 9);
      while (newBoard[id]) {
        id = Math.floor(Math.random() * 9);
      }
      newBoard[id] = 'O';
      setBoard(newBoard);
    }
  }

  function renderSquare(id) {
    return (
      <button className="square" onClick={() =>{ 
        if(players === 2 || (players === 1 && currentPlayer === 'X')){
          makeMove(id)
        }else{
          alert("It's not your turn")
        }
      }}>
        {board[id]}
      </button>
    );
  }

  const winner = calculateWinner(board);
  let status;
  let gameover;
  if (winner) {
    status = " ";
    end = true;
    gameover = (
      <React.Fragment>
        Game Over <br />
        Winner: {winner}!!!
      </React.Fragment>
    );
  } else if (!board.includes(null)) {
    status = ' ';
    end = true;
    gameover = (
      <React.Fragment>
        Game Over <br />
        Draw!!!
      </React.Fragment>
    );
  } else {
    status = `Next player: ${currentPlayer}`;
  }

  return (
    <div>
      <Link to="/" className='no-underline'>
        <a class="btn disabled back_btn"> <i class="material-icons">arrow_back</i></a>
      </Link>
      <Header name="Tic Tac Toe" />
      <div className='select-game'>
        <div>Select one game:</div>
        <button className='players-btn' onClick={() => setPlayers(1)}>One player</button>
        <button className='players-btn' onClick={() => setPlayers(2)}>Two players</button>
      </div>      
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-col">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <div>
        {end && <h1 className="game-over">{gameover}</h1>}
        </div>
      </div>
    </div>
  );
}

// Helper function to determine the winner
function calculateWinner(squares) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
