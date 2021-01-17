import React from 'react'

import './Navbar.css';


function Navbar({toger,togertru}) {
    return (
        <div className="navbar">
            <h1   className="navbar__All pointer " onClick={toger} >All</h1>
            <h1  className="navbar__ShortListed pointer " onClick={togertru}  >ShortListed</h1>
        </div>
    )
}

export default Navbar
