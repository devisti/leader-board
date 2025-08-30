import React from 'react'
import './LeaderBoard.css'
import LeaderBoardPlayerCardTitle from '../components/LeaderBoardPlayerCardTitle.jsx'
import LeaderBoardPlayerCard from '../components/LeaderBoardPlayerCard.jsx'
import WinnerCard from '../components/WinnerCard.jsx'
import avatar1 from '../assets/images/avatars/avatar1.jpg'
import avatar2 from '../assets/images/avatars/avatar2.jpg'
import avatar3 from '../assets/images/avatars/avatar3.jpg'
import avatar4 from '../assets/images/avatars/avatar4.jpg'

function LeaderBoard() {
  // update the players list here
  const players = {
    player1: "Rakesh",
    player2: "Nazrana",
    player3: "Shahid",
    player4: "Hirok",
    player5: "Farhan",
    player6: "Suhana",
    player7: "Rohan",
    player8: "Shivam",
    player9: "Aksit",
    player10: "Rohit",
  };
  // avatars can be updated here. first,second and third
  const avatars = {
    first_winner: avatar1,
    second_winner: avatar2,
    third_winner: avatar3
  };

  return (
    <div className='main-content-container'>
      <div className="sub-container-1">
        <div className="overlay"></div>
        <div className="winner-cards-wrapper">
          <WinnerCard winner1={players["player1"]} first_winner={avatars["first_winner"]} first_winner_score="00000"
            winner2={players["player2"]} second_winner={avatars["second_winner"]} second_winner_score="00000"
            winner3={players["player3"]} third_winner={avatars["third_winner"]} third_winner_score="00000" />
        </div>

      </div>
      <div className="sub-container-2">
        <h3>Top Players</h3>
        <LeaderBoardPlayerCardTitle />
        <LeaderBoardPlayerCard rank="#04" name={players["player4"]} scores="00000" />
        <LeaderBoardPlayerCard rank="#05" name={players["player5"]} scores="00000" />
        <LeaderBoardPlayerCard rank="#06" name={players["player6"]} scores="00000" />
        <LeaderBoardPlayerCard rank="#07" name={players["player7"]} scores="00000" />
        <LeaderBoardPlayerCard rank="#08" name={players["player8"]} scores="00000" />
        <LeaderBoardPlayerCard rank="#09" name={players["player9"]} scores="00000" />
        <LeaderBoardPlayerCard rank="#10" name={players["player10"]} scores="00000" />


      </div>
    </div>
  )
}

export default LeaderBoard
