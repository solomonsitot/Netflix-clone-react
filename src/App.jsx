import React from 'react'
import Nav from './components/nav/Nav'
import NewMovie from './components/NewMovie/NewMovie'
import './App.css'
import Card from './components/Card/Card'
import Cards from './components/Cards/Cards'
function App() {
  return (
    <>
      <Nav />
      <NewMovie/>
      <Cards />
      
    </>
  )
}

export default App