import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"
import { RiCloseLine, RiExpandDiagonalLine, RiSubtractLine } from '@remixicon/react'

const MacWindow = ({ children }) => {
    return (
        <Rnd default={{ width: "50vw", height: "70vh", x: 350, y: 100 }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red">
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
        </Rnd>
    )
}

export default MacWindow