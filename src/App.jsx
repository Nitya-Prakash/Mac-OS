import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './Windows/Github'
import Notes from './Windows/Notes'
import Resume from './Windows/Resume'
import Spotify from './Windows/Spotify'
import Cli from './Windows/Cli'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Notes />
      <Resume />
      <Spotify />
      <Cli />
    </main>
  )
}

export default App