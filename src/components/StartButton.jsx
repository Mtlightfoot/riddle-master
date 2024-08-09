import React, { useState } from 'react'
import Riddle from './Riddle'

function StartButton() {

    const [isVisible, setIsVisible] = useState(false);

    const startGame = () => {
        setIsVisible(!isVisible)
    }

    if (isVisible) {
        return (
            <Riddle />
        )
    } else {
        return (
            <div className='flex items-center justify-center w-full h-screen'>
                <button onClick={startGame} className="btn btn-lg btn-neutral">Start Game</button>
            </div>
        )
    }
}

export default StartButton