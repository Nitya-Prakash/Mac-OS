import React from 'react'
import Terminal from 'react-console-emulator'
import MacWindow from './MacWindow'
import "./cli.scss"

const Cli = () => {

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
                Resume available upon request.

                Focused on:
                - Full Stack Development
                - MERN Stack
                - UI/UX Engineering
                - AI Integration`
        },

        contact: {
            description: 'Contact details',
            fn: () => `
                Email: yourmail@gmail.com
                Location: Rajasthan, India
                Status: Open to opportunities`
        },

        socials: {
            description: 'Social media links',
            fn: () => `
                GitHub: github.com/yourusername
                LinkedIn: linkedin.com/in/yourusername
                Portfolio: yourportfolio.com`
        }
    }

    return (
        <MacWindow height="50vh" width="35vw">
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
