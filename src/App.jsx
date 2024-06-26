import Home from './pages/Home'
import Navbar from './components/Navbar'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import { CssBaseline } from '@mui/material'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Education/>
    <Skills/>
    <Projects/>
    <Footer/>
    <CssBaseline/>
    </>
  )
}

export default App
