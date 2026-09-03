import React from 'react'
import "./dock.scss"

const Dock = ({ windowState, setWindowState }) => {
    return (
        <footer className='dock'>
            <div
                onClick={() => {
                    setWindowState((prevState) => ({ ...prevState, github: true }))
                }}
                className='icon github'><img src="/doc-icons/github.svg" alt="" /></div>
            <div
                onClick={() => {
                    setWindowState((prevState) => ({ ...prevState, notes: true }))
                }}
                className='icon note'><img src="/doc-icons/note.svg" alt="" /></div>
            <div
                onClick={() => {
                    setWindowState((prevState) => ({ ...prevState, resume: true }))
                }}
                className='icon pdf'><img src="/doc-icons/pdf.svg" alt="" /></div>
            <div
                onClick={() => { window.open("https://calendar.google.com", "_blank") }}
                className='icon calender'><img src="/doc-icons/calender.svg" alt="" /></div>
            <div
                onClick={() => {
                    setWindowState((prevState) => ({ ...prevState, spotify: true }))
                }}
                className='icon spotify'><img src="/doc-icons/spotify.svg" alt="" /></div>
            <div
                onClick={() => { window.open("mailto:nityaprakashsahoo6776@gmail.com") }}
                className='icon mail'><img src="/doc-icons/mail.svg" alt="" /></div>
            <div
                onClick={() => { window.open("https://www.linkedin.com/in/nitya-prakash-sahoo/", "_blank") }}
                className='icon link'><img src="/doc-icons/link.svg" alt="" /></div>
            <div
                onClick={() => {
                    setWindowState((prevState) => ({ ...prevState, cli: true }))
                }}
                className='icon cli'><img src="/doc-icons/cli.svg" alt="" /></div>
        </footer>
    )
}

export default Dock