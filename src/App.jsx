import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import One from "../pages/One"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/one' element={<One/>}/>
      </Routes>
    </Router>
  )
}

export default App