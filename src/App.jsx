
import { Route, Router, Routes, useLocation, } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './pages/Home'
import Contact from "./pages/Contact"
import Gallery1 from './pages/Gallery1'
import Gallery2 from './pages/Gallery2'
import Gallery3 from './pages/Gallery3'
import { useEffect } from 'react'

function App() {
  
const { pathname } = useLocation()

useEffect(() => {
  window.scrollTo(0,0)
}, [pathname])

  return (
    <>
    <Navbar />

    <Routes>
      

      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/fotocabina" element={<Gallery1 />} />
      <Route exact path="/plataforma360" element={<Gallery2 />} />
      <Route exact path="/tunelled" element={<Gallery3 />} />
      
    </Routes>

    <Footer />

    
    </>
  )
}

export default App
