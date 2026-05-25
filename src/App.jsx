import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './Windows/Github'
import Notes from './Windows/Notes'
import Resume from './Windows/Resume'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Notes />
      <Resume />
    </main>
  )
}

export default App