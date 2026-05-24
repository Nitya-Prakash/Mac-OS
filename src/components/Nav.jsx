import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Nav = () => {
    return (
        <nav>
            <div className="nav-left">
                <div className="apple-icon">
                    <img src="/control-pannel/apple.svg" alt="" />
                </div>
                <div className="nav-item">
                    <p>Nitya Prakash</p>
                </div>
                <div className="nav-item">
                    <p>File</p>
                </div>
                <div className="nav-item">
                    <p>Window</p>
                </div>
                <div className="nav-item">
                    <p>Terminal</p>
                </div>
            </div>
            <div className="nav-right">
                <div className="nav-icon">
                    <img src="/control-pannel/wifi.svg" alt="" />
                </div>
                <div className="nav-item">
                    <DateTime />
                </div>
            </div>
        </nav>
    )
}

export default Nav