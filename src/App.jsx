import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Index'
import PurchasedReceipes from './pages/PurchasedReceipes'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/purchased-recipes" element={<PurchasedReceipes/>} />
            <Route path="*" element={<h1>Coming soon</h1>} />
        </Routes>
    )
}

export default App
