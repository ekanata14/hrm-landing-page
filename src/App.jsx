import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App(){

  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </Router>
  )
}

export default App
