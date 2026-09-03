import React from 'react'
import MacWindow from "./MacWindow"
import githubData from "../assets/github.json"
import "./github.scss"

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repolink: "", demolink: "" } }) => {
    return <div className='card'>
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
        <div className='tags'>
            {data.tags.map((tag, idx) => <p key={idx} className='tag'>{tag}</p>)}
        </div>
        <div className='links'>
            <a href={data.repolink} target='_blank'>Repository</a>
            {data.demolink && <a href={data.demolink} target='_blank'>Demo Link</a>}
        </div>
    </div>
}

const Github = ({ windowName, setWindowState, windowOrder, setWindowOrder, bringToFront }) => {
    const minX = 0
    const maxX = 700
    let x = Math.floor(Math.random() * (maxX - minX) + minX)
    const minY = 100
    const maxY = 150
    let y = Math.floor(Math.random() * (maxY - minY) + minY)
    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState} x={x} y={y} windowOrder={windowOrder} setWindowOrder={setWindowOrder} bringToFront={bringToFront}>
            <div className='cards'>
                {githubData.map((elem, idx) => {
                    return <GitCard key={idx} data={elem} />
                })}
            </div>
        </MacWindow>
    )
}

export default Github