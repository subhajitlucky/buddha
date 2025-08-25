import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LifePage from './pages/LifePage'
import TeachingsPage from './pages/TeachingsPage'
import MeditationPage from './pages/MeditationPage'
import TextsPage from './pages/TextsPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/life" element={<LifePage />} />
          <Route path="/teachings" element={<TeachingsPage />} />
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/texts" element={<TextsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
