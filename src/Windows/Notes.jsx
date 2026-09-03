import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import MacWindow from './MacWindow'
import "./notes.scss"
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Notes = ({ windowName, setWindowState, windowOrder, setWindowOrder }) => {
    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        fetch("/notes.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    })

    const minX = 0
    const maxX = 700
    let x = Math.floor(Math.random() * (maxX - minX) + minX)
    const minY = 100
    const maxY = 150
    let y = Math.floor(Math.random() * (maxY - minY) + minY)

    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState} x={x} y={y} windowOrder={windowOrder} setWindowOrder={setWindowOrder}>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language='typescript' style={a11yDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow >
    )
}

export default Notes