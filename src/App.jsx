import { useState } from 'react'
import './App.css'
import LogPage from './pages/homePage'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage'
import PizzaDetail from './components/pizzaDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<LogPage />} />
      <Route path="/about" element={<LandingPage />} />
      <Route path="pizza/:id" element={<PizzaDetail />} />
    </Routes>
    </>
  )
}

export default App
