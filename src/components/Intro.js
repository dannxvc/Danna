import { useState } from "react";
import "../css/Intro.css";
import NavBar from "./NavBar";
import "../css/NavBar.css";
function Intro() {
    const [open,setOpen]=useState("close");
    return ( 
        <header className="header" id="intro">
            <p className="intro-greet">Hi! I'm</p> 
            <h1>Danna.</h1>
            <p className="intro-description">I am a very passionate software engineering student. I am interested in frontend and backend development.</p>
            <button 
                className={`hamburguer ${open === "close"? "":"open"}`}
                onClick={() => open==="open"?setOpen("close"):setOpen("open")}
            >
            </button>
            <NavBar
                classNav={`navBar ${open === "close"? "":"open"}`}
            />
        </header>
     );
}

export default Intro;