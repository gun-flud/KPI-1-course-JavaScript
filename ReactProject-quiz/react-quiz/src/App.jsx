import { useState, useRef, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Header from './DOM-blocks/Header.jsx'
import Footer from './DOM-blocks/Footer.jsx'
import Home from './pages/Home.jsx'
import Editing from './pages/Editing.jsx'
import './index.css'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route index element = { <Home /> } />
      <Route path="/create" element={ <Editing /> } />
      <Route path="/edit/:id" element={ <Editing /> } />
      <Route path="/results/" element={ <div>Results Page</div> } />
      <Route path="/result" element={ <div>Result Page</div> } />
      <Route path="/help" element={ <div>Help Page</div> } />
    </Routes>
		<Footer />
    </>
  )
}

export default App
