import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import { CssBaseline } from '@mui/material'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Education/>
    <Projects/>
    <Footer/>
    <CssBaseline/>
    </>
  )
}

export default App
