import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './Windows/MacWindow'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <MacWindow />
    </main>
  )
}

export default App