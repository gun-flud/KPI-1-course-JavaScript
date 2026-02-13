import { Routes, Route } from 'react-router'

import Header from './Header'
import Valentine from './Valentine'

import './index.css'

function App() {
  return (
    <>
      <Header/> 
      <Routes>
        <Route path="/1" element={<Valentine />} />
        <Route path="/2" element={<div>About Page</div>} />
        <Route path="/3" element={<div>Contact Page</div>} />
        <Route path="/4" element={<div>Blog Page</div>} />
        <Route path="/5" element={<div>Services Page</div>} />
      </Routes>
    </>
  )
}

export default App
