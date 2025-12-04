import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/home'
import { Navbar } from './components/navbar'
import { Descripcion } from './components/Descripcion'
import { CardsComidas } from './components/CardsComidas'
import { Eligenos } from './components/Eligenos'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Descripcion /> 
      <CardsComidas />
      <Eligenos />
      <Footer />
    </>
  )
}

export default App
