import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className = "navigation">
            <h3><Link to="/portfolio">HOME</Link></h3>
            <h3><Link to="/projects">PROJECTS</Link></h3>
            <h3><Link to="/experience">EXPERIENCES</Link></h3>
        </div>
    )
}

export default Header;