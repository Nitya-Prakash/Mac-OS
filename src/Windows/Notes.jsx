import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import MacWindow from './MacWindow'
import "./notes.scss"
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Notes = () => {
    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        fetch("/notes.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    })

    return (
        <MacWindow>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language='typescript' style={a11yDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow>
    )
}

export default Notes