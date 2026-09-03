import React from 'react'
import "./menuPopUp.scss"
// import { bringToFront } from "../Windows/MacWindow"

const MenuPopUp = ({ windowState, setWindowState }) => {
  return (
    <div className='menu'>
      <div
        onClick={() => {
          setWindowState(prev => ({ ...prev, github: true, menu: false }))
          // bringToFront()
        }}
      >
        <h2>Github</h2>
      </div>
      <div
        onClick={() => {
          setWindowState(prev => ({ ...prev, notes: true, menu: false }))
        }}
      >
        <h2>Notes</h2>
      </div>
      <div
        onClick={() => {
          setWindowState(prev => ({ ...prev, resume: true, menu: false }))
        }}
      >
        <h2>Resume</h2>
      </div>
      <div
        onClick={() => {
          setWindowState(prev => ({ ...prev, spotify: true, menu: false }))
        }}
      >
        <h2>Spotify</h2>
      </div>
      <div
        onClick={() => {
          setWindowState(prev => ({ ...prev, cli: true, menu: false }))
        }}
      >
        <h2>Terminal</h2>
      </div>
    </div>
  )
}

export default MenuPopUp