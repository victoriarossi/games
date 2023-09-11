import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../css/GameCard.css';
import { Link } from "react-router-dom";


export default function GameCard() {
    return (
        <>
        <div className='games-list'>
                <Card className='game-card'>
                    <Link to="/TicTacToe" className='no-underline'>
                        <CardActionArea className='game-card-area'>
                            <CardMedia
                            component="img"
                            height="140"
                            image="/tic-tac-toe.jpeg"
                            alt="Tic Tac Toe"
                            className='game-card-img'
                            />
                            <CardContent className='game-content'>
                                <Typography gutterBottom variant="h5" component="div" className='game-name' >
                                    Tic Tac Toe
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='game-description'>
                                    A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
        </div>
        </>
    );
}