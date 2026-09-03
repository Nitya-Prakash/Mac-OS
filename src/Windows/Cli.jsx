import React from 'react'
import Terminal from 'react-console-emulator'
import MacWindow from './MacWindow'
import "./cli.scss"

const Cli = ({ windowName, setWindowState, windowOrder, setWindowOrder }) => {

    const commands = {

        about: {
            description: 'About me',
            fn: () => `
            Hey, I'm Nitya Prakash.

            A full-stack developer passionate about
            building modern web experiences,
            creative UI interfaces, and AI products.

            Currently focused on MERN stack,
            backend systems, and scalable applications.`
        },

        skills: {
            description: 'View technical skills',
            fn: () => `
                Frontend:
                - React.js
                - JavaScript
                - TailwindCSS
                - GSAP
                - HTML5
                - CSS3

                Backend:
                - Node.js
                - Express.js
                - MongoDB

                Tools:
                - Git
                - GitHub
                - Figma
                - Postman
                - Linux
                `
        },

        projects: {
            description: 'View projects',
            fn: () => `
                1. ShopKart 2.0
                React-based E-Commerce platform

                2. AI Automation Website
                Frontend AI service platform

                3. Figma UI Projects
                Modern UI/UX interfaces

                4. Animated Landing Pages
                Built using GSAP + React`
        },

        resume: {
            description: 'Resume information',
            fn: () => `
                Resume available on pdf icon in the dock.

                Focused on:
                - Full Stack Development
                - MERN Stack
                - UI/UX Engineering
                - AI Integration`
        },

        contact: {
            description: 'Contact details',
            fn: () => `
                Email: nityaprakashsahoo6776@gmail.com
                Location: Bhubaneswar, Odisha
                Status: Open to opportunities`
        },

        socials: {
            description: 'Social media links',
            fn: () => `
                GitHub: github.com/Nitya-Prakash
                LinkedIn: linkedin.com/in/nitya-prakash-sahoo`
        }
    }

    const minX = 0
    const maxX = 700
    let x = Math.floor(Math.random() * (maxX - minX) + minX)
    const minY = 100
    const maxY = 150
    let y = Math.floor(Math.random() * (maxY - minY) + minY)

    return (
        <MacWindow height="50vh" width="35vw" windowName={windowName} setWindowState={setWindowState} x={x} y={y} windowOrder={windowOrder} setWindowOrder={setWindowOrder}>
            <div className="terminal-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={
                        <>
                            Welcome to my interactive terminal !
                            <br />
                            Explore my work, skills, and projects using the commands below
                            <br />
                            Type 'help' to get started.
                        </>}
                    promptLabel={"nityaprakash:~$"}
                    promptLabelStyle={{ color: "#00ff00" }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli
