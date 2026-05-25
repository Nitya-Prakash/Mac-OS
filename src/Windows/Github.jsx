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
            {data.tags.map(tag => <p className='tag'>{tag}</p>)}
        </div>
        <div className='links'>
            <a href={data.repolink} target='_blank'>Repository</a>
            {data.demolink && <a href={data.demolink} target='_blank'>Demo Link</a>}
        </div>
    </div>
}

const Github = () => {
    return (
        <MacWindow>
            <div className='cards'>
                {githubData.map(elem => {
                    return <GitCard data={elem} />
                })}
            </div>
        </MacWindow>
    )
}

export default Github