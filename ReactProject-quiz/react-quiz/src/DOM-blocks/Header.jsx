import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import "../index.css"
import logoIcon from '../assets/logo-icon.png'

function Header() {

  return (
    <>
    <header >
			<img src={logoIcon} alt="logo" className="icon" />
      <div className="toolbar">
			<Link to="/" className="button">Quizzes</Link>
			<Link to="/results" className="button" >Results</Link>
			<Link to="/" className="button">Help</Link>
		</div>
		</header>
    </>
  )

}

export default Header
