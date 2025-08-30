import React from 'react'
import './LeaderBoardPlayerCardTitle.css'

function LeaderBoardPlayerCardTitle(props) {
    return (
        <div className="leaderboard-grid">
            <div className="cell-1 cells">Rank</div>
            <div className="cell-2 cells">Name</div>
            <div className="cell-3 cells">Scores</div>
        </div>
    )
}

export default LeaderBoardPlayerCardTitle
