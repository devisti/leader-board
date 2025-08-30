import React from 'react'
import './WinnerCard.css'

function WinnerCard(props) {
    return (
        <div className='winner-cards-container'>
            <div className='winner-card-2 winner-cards'>
                <h3>🥈2nd</h3>
                <div className="image-container">
                    <img src={props.second_winner} alt="Second winner image" />
                </div>
                <p>{props.winner2} </p>
            </div>
            <div className='winner-card-1 winner-cards'>
                <h3>🏆 1st</h3>
                <div className="image-container">
                    <img src={props.first_winner} alt="First winner image" />
                </div>
                <p>{props.winner1} </p>
            </div>
            <div className='winner-card-3 winner-cards'>
                <h3>🥉 3rd</h3>
                <div className="image-container">
                    <img src={props.third_winner} alt="Third winner image" />
                </div>
                <p>{props.winner3} </p>
            </div>
        </div>
    )
}

export default WinnerCard
