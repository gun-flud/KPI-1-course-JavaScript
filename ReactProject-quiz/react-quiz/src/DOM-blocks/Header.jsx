import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { useResponsive } from '../logic/HandleResize.jsx'
import "../index.css"
import logoIcon from '../assets/logo-icon.png'

function Header() {
  const navigate = useNavigate();
  const { isMobile, isTablet, isDesktop, width } = useResponsive();

  return (
    <>
    <header>
			<img src={logoIcon} alt="logo" className="icon" onClick={() => navigate('/')}/>
      <div className="toolbar">
      <Link to="/login" className="button">Log in</Link>
			<Link to="/" className="button">Quizzes</Link>
			<Link to="/results" className="button" >Results</Link>
			<Link to="/" className="button">Help</Link>
      {isMobile && <Link to="/" className="button">{width.toString()}</Link>}
		</div>
		</header>
    </>
  )

}

export default Header



