import * as React from 'react';
import GameCard from '../components/GameCard';
import '../css/Home.css';

export default function Home(){
    return (
        <>
        <h1 className='title'>Select the game you want to play!</h1>
        <GameCard />
        </>
    )
}