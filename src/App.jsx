import React, { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './Windows/Github'
import Notes from './Windows/Notes'
import Resume from './Windows/Resume'
import Spotify from './Windows/Spotify'
import Cli from './Windows/Cli'
import MenuPopUp from './components/MenuPopUp'

const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    cli: false,
    menu: false
  })

  const [windowOrder, setWindowOrder] = useState(["github", "notes", "resume", "spotify", "cli"])

  return (
    <main>
      <Nav windowState={windowState} setWindowState={setWindowState} />
      {windowState.menu && <MenuPopUp windowState={windowState} setWindowState={setWindowState} />}
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && <Github windowName="github" setWindowState={setWindowState} windowOrder={windowOrder} setWindowOrder={setWindowOrder} />}
      {windowState.notes && <Notes windowName="notes" setWindowState={setWindowState} windowOrder={windowOrder} setWindowOrder={setWindowOrder} />}
      {windowState.resume && <Resume windowName="resume" setWindowState={setWindowState} windowOrder={windowOrder} setWindowOrder={setWindowOrder} />}
      {windowState.spotify && <Spotify windowName="spotify" setWindowState={setWindowState} windowOrder={windowOrder} setWindowOrder={setWindowOrder} />}
      {windowState.cli && <Cli windowName="cli" setWindowState={setWindowState} windowOrder={windowOrder} setWindowOrder={setWindowOrder} />}
    </main>
  )
}

export default App