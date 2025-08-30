import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <h2><span>Leader</span><span>board</span>&nbsp;🏆</h2>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
