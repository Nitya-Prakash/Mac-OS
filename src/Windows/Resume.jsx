import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowState, windowOrder, setWindowOrder }) => {
    const minX = 0
    const maxX = 700
    let x = Math.floor(Math.random() * (maxX - minX) + minX)
    const minY = 100
    const maxY = 150
    let y = Math.floor(Math.random() * (maxY - minY) + minY)
    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState} x={x} y={y} windowOrder={windowOrder} setWindowOrder={setWindowOrder}>
            <div className="resume-window">
                <iframe src="/My_Resume.pdf" frameborder="0"></iframe>
            </div>
        </MacWindow>
    )
}

export default Resume