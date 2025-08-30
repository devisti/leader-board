import React from 'react'
import './LeaderBoardPlayerCard.css'

function LeaderBoardPlayerCard(props) {
    return (
        <div className='player-card-grid'>
            <div className="player-card-cell-1 player-card-cells">{props.rank}</div>
            <div className="player-card-cell-2 player-card-cells">{props.name}</div>
            <div className="player-card-cell-3 player-card-cells"><p>{props.scores}</p></div>
        </div>
    )
}

export default LeaderBoardPlayerCard
