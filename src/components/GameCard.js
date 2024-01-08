import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../css/GameCard.css';
import { Link } from "react-router-dom";


export default function GameCard({name, link, img, description}) {
    return (
        <>
            <Card className='game-card'>
                <Link to={link} className='no-underline'>
                    <CardActionArea className='game-card-area'>
                        <CardMedia
                        component="img"
                        style={{maxWidth: 140}}
                        image={img}
                        alt={name}
                        className='game-card-img'
                        />
                        <CardContent className='game-content'>
                            <Typography gutterBottom variant="h5" component="div" className='game-name' >
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='game-description'>
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </>
    );
}


/*
<Card className='game-card'>
                    <Link to="/Sudoku" className='no-underline'>
                        <CardActionArea className='game-card-area'>
                            <CardMedia
                            component="img"
                            style={{maxWidth: 140}}
                            image="/sudoku.png"
                            alt="Sudoku"
                            className='game-card-img'
                            />
                            <CardContent className='game-content'>
                                <Typography gutterBottom variant="h5" component="div" className='game-name' >
                                    Sudoku
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='game-description'>
                                    Sudoku is a challenging number puzzle game where players aim to fill a 9x9 grid with digits 1 to 9, ensuring each row, column, and 3x3 subgrid contains every digit without repetition.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>*/