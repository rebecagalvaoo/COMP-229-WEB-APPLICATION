import { BrowserRouter, Routes, Route } from 'react-router-dom' //BR permite que trabalhe com url, Routes conjunto das nossas rotas, Route cada rota individual

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import References from './pages/References'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

import Navbar from './navigationBar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} /> 

      </Routes>
    </BrowserRouter>
  )
}

export default App