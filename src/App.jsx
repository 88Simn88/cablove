
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './pages/Home'
import Contact from "./pages/Contact"
import Gallery1 from './pages/Gallery1'
import Gallery2 from './pages/Gallery2'
import Gallery3 from './pages/Gallery3'

function App() {
  

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/fotocabina" element={<Gallery1 />} />
      <Route path="/plataforma360" element={<Gallery2 />} />
      <Route path="/tunelled" element={<Gallery3 />} />
    </Routes>

    <Footer />

    
    </>
  )
}

export default App
