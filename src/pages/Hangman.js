import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../css/Hangman.css';
import { Link } from "react-router-dom";

export default function Hangman() {
    // const [difficulty, setDifficulty] = useState(1); // 1 = easy, 2 = medium, 3 = hard. Default: 1
    const [word, setWord] = useState(''); // word to guess
    const [letter, setLetter] = useState('');
    const sample = require('../server/hangman.json');
    const [currentWord, setCurrentWord] = useState(Array(word.length).fill('_'));
    const [lives, setLives] = useState(10);

    let end = false;
    let gameover;

    useEffect(() => {
        renderWord();
    }, [word]);

    console.log(word);

    function createWord(difficulty) {
        let index;
        switch (difficulty) {
            case 1:
                index = Math.floor(Math.random() * sample.easy.length);
                setWord(sample.easy[index]);
                setCurrentWord(Array(sample.easy[index].length).fill('_'));
                document.getElementById('difficulty-btn-1').disabled = true;
                document.getElementById('difficulty-btn-2').disabled = false;
                document.getElementById('difficulty-btn-3').disabled = false;
                break;
            case 2:
                index = Math.floor(Math.random() * sample.medium.length);
                setWord(sample.medium[index]);
                setCurrentWord(Array(sample.medium[index].length).fill('_'));
                document.getElementById('difficulty-btn-1').disabled = false;
                document.getElementById('difficulty-btn-2').disabled = true;
                document.getElementById('difficulty-btn-3').disabled = false;
                break;
            case 3:
                index = Math.floor(Math.random() * sample.hard.length);
                setWord(sample.hard[index]);
                setCurrentWord(Array(sample.hard[index].length).fill('_'));
                document.getElementById('difficulty-btn-1').disabled = false;
                document.getElementById('difficulty-btn-2').disabled = false;
                document.getElementById('difficulty-btn-3').disabled = true;
                break;
        }
        setLives(10);
    }

    function validateLetter(index) {
        if (word[index] === letter) {
            setCurrentWord(prevCurrentWord => {
                const updatedCurrentWord = [...prevCurrentWord];
                updatedCurrentWord[index] = letter;
                return updatedCurrentWord;
            });
        } else {
            setLives(lives - 1);
        }
    }

    function renderWord() {
        if (word === '') {
            return (
                <div>Select a difficulty to begin!</div>
            );
        }
        let wordArray = word.split('');
        return currentWord.map((value,index) => {
            return (
                <button className='word-letter' onClick={() => validateLetter(index)}>
                    {value}
                </button>
            )
        })
    }

    function renderLetters() {
        let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
        // Calculate the number of letters per row
        const lettersPerRow = Math.ceil(letters.length / 3);
    
        // Divide the letters into three rows
        const rows = [];
        for (let i = 0; i < 3; i++) {
            const rowLetters = letters.slice(i * lettersPerRow, (i + 1) * lettersPerRow);
            rows.push(
                <div key={i} className="letter-row">
                    {rowLetters.map((letter) => (
                        <button key={letter} className="letter" onClick={() => setLetter(letter)}>
                            {letter}
                        </button>
                    ))}
                </div>
            );
        }
        return rows;
    }

    if (isSolved()) {
        end = true;
        gameover = (
            <React.Fragment>
                Congratulations, 
                You guessed!!!
            </React.Fragment>
        );
    }

    function isSolved() {
        for(let i = 0; i < word.length; i++) {
            if(currentWord[i] !== word[i]){
                return false;
            }
        }
        return true;
    }

    return (
        <div>
            <Link to="/" className='no-underline'>
                <a class="btn disabled back_btn"> <i class="material-icons">arrow_back</i></a>
            </Link>
            <Header name="Hangman" />
            <div>
                <div className='select-difficulty'>Select the difficulty:</div>
                <div className='difficulty-list'>
                    <button className='difficulty-btn' id='difficulty-btn-1' onClick={() => createWord(1)}>Easy</button>
                    <button className='difficulty-btn' id='difficulty-btn-2' onClick={() => createWord(2)}>Medium</button>
                    <button className='difficulty-btn' id='difficulty-btn-3' onClick={() => createWord(3)}>Hard</button>
                </div>
            </div>  
            <div>
                {end && <h1 className="game-over">{gameover}</h1>}
            </div>
            <div className="word">
            {renderWord()}
            </div> 
            <div className='lives'>
                <div className='lives-txt'>Lives remaining: {lives}</div>
            </div>
            <div className='letters'>
                {renderLetters()}
            </div>
        </div>
    );
}