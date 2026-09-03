import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'
import MenuPopUp from './MenuPopUp'

const Nav = ({ windowState, setWindowState }) => {
    const menuPopUp = () => {
        if (windowState.menu === false) {
            setWindowState(prev => ({ ...prev, menu: true }))
        } else {
            setWindowState(prev => ({ ...prev, menu: false }))
        }
    }

    return (
        <nav>
            <div className="nav-left">
                <div
                    onClick={menuPopUp}
                    className="apple-icon">
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
                <div
                    onClick={() => {
                        setWindowState(prev => ({ ...prev, cli: true }))
                    }}
                    className="nav-item">
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