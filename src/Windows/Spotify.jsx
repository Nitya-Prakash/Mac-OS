import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({ windowName, setWindowState, windowOrder, setWindowOrder }) => {
    const minX = 0
    const maxX = 700
    let x = Math.floor(Math.random() * (maxX - minX) + minX)
    const minY = 100
    const maxY = 150
    let y = Math.floor(Math.random() * (maxY - minY) + minY)
    return (
        <MacWindow width='30vw' height='70vh' windowName={windowName} setWindowState={setWindowState} x={x} y={y} windowOrder={windowOrder} setWindowOrder={setWindowOrder}>
            <div className="spotify-window">
                <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/0nChVO7Zu37oJP5t3V0vAS?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify