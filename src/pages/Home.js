import * as React from 'react';
import GameCard from '../components/GameCard';
import '../css/Home.css';

export default function Home(){
    return (
        <>
        <h1 className='title'>Select the game you want to play!</h1>
        <div className='games-list'>
            <GameCard 
                name='Tic Tac Toe'
                link='/TicTacToe'
                img='/tic-tac-toe.jpeg'
                description="A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares."
            />
            <GameCard 
                name='Sudoku'
                link='/Sudoku'
                img='/sudoku.png'
                description="Sudoku is a challenging number puzzle game where players aim to fill a 9x9 grid with digits 1 to 9, ensuring each row, column, and 3x3 subgrid contains every digit without repetition."
            />
            <GameCard
                name='Hangman'
                link='/Hangman'
                img='/hangman.png'
                description="Hangman is a classic word game in which you must guess as many secret words as you can before you run out of lives! Challenge your friends and learn new words, one letter at a time!"
            />
            <GameCard
                name='Connect Four'
                link='/ConnectFour'
                img='/connectfour.png'
                description="Connect Four is a two-player connection board game in which the players first choose a color and then take turns dropping colored discs from the top into a seven-column, six-row vertically suspended grid."
            />
        </div>
        </>
    )
}