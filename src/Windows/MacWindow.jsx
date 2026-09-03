import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"
import { RiCloseLine, RiExpandDiagonalLine, RiSubtractLine } from '@remixicon/react'

const MacWindow = ({ children, width = "50vw", height = "70vh", windowName, setWindowState, x = 350, y = 100, windowOrder, setWindowOrder }) => {
    const bringToFront = () => {
        setWindowOrder(prev => [...prev.filter(w => w !== windowName), windowName])
    }

    const zIndex = windowOrder.indexOf(windowName) + 1

    return (
        <Rnd
            style={{ zIndex: zIndex }}
            onMouseDown={bringToFront}
            default={{ width: width, height: height, x: x, y: y }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div
                            onClick={() => {
                                setWindowState((prevState) => ({ ...prevState, [windowName]: false }))
                            }}
                            className="dot red">
                            <p><RiCloseLine size={12} /></p>
                        </div>
                        <div className="dot yellow">
                            <p><RiSubtractLine size={12} /></p>
                        </div>
                        <div className="dot green">
                            <p><RiExpandDiagonalLine size={9} /></p>
                        </div>
                    </div>
                    <div className="title">
                        <p>nityaprakash -zsh</p>
                    </div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd >
    )
}

export default MacWindow