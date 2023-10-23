import React from 'react'
import game from './game.json';
import { Link } from 'react-router-dom';
// import "./Game.scss"

const GameName = () => {

    return (
        <div>
            {game.map((games) => {
                return (
                    <>
                        <Link to={`/gameName/${games.id}`} className='game-div'>{games.id}</Link>
                    </>
                )
            })}
        </div>
    )
}

export default GameName