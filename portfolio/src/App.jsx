import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
import Header from './components/Header'
import Home from './components/Home'
import ProjectGallery from './components/Project-Gallery'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project-gallery" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App