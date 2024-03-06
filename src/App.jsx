import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Ramadhan from './pages/Ramadhan'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/ramadhan" Component={Ramadhan} />
      </Routes>
    </Router>
  )
}

export default App
