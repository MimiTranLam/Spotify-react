import React from "react"
import logo from '../images/logo.png';

// const signUpLogInStyle = (e) => {
//     e.target.style.color = "#DOD1D4";
// }

const handleMouseEnter = (e) => {
    e.target.style.color = "#1ed760";
}

// fix if condition - find out solution
const handleMouseLeave = (e) => {
    if (e.className === "signupLogIn") {
        e.target.style.color = "#D0D1D4";
    } else {
        e.target.style.color = "white";
    }
}

const Navbar = () => {
    return <nav style={{backgroundColor:"black", width:"100vw", height:"80px"}}>
    <div className="nav-container">
        <button id="logo" style={{background:"none"}}>
            <img src={logo} alt="logo" style={{width:"130px"}}></img>
        </button>
        <div className="nav-links">
            <a href="https://www.spotify.com/us/premium/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Premium</a>
            <a href="https://www.spotify.com/us/premium/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Support</a>
            <a href="https://www.spotify.com/us/premium/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Download</a>
            <span style={{color:"white", fontWeight:"400", margin:"0 15px"}}>|</span>
            <a className="signupLogIn" href="https://www.spotify.com/us/premium/" onMouseEnter={handleMouseEnter} onMouseLeave={(e) => {e.target.style.color = "#D0D1D4"}}>Sign up</a>
            <a className="signupLogIn" href="https://www.spotify.com/us/premium/" onMouseEnter={handleMouseEnter} onMouseLeave={(e) => {e.target.style.color = "#D0D1D4"}}>Log in</a>
        </div>
    </div>
    </nav>
}

export default Navbar;
