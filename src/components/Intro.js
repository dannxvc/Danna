import Typed from "typed.js";
import { useState, useEffect, useRef  } from "react";
import "../css/Intro.css";
import NavBar from "./NavBar";
import "../css/NavBar.css";

function Intro() {
    const el = useRef(null);
    const [open,setOpen]=useState(true);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Hi! I'm", "Danna."],         
          startDelay: 300,
          typeSpeed: 80,
          backSpeed: 100,
          backDelay: 100
        });
        return () => {
          typed.destroy();
        };
      }, []);

    return ( 
        <header className="header" id="intro">
            <p className="intro-greet">Hi! I'm</p> 
            <div className="title">
                <h1 ref={el}></h1>
            </div>
            <p className="intro-description">
                I am a very passionate software engineering student. 
                I focus my skills on frontend and backend development.
            </p>
            <button 
                className={`hamburguer ${open? "":"open"}`}
                onClick={() => open?setOpen(false):setOpen(true)}
            >
            </button>
            <NavBar
                classNav={`navBar ${open? "":"open"}`}
                isOpen={open}
                onLinkClick={() => open?setOpen(false):setOpen(true)}
            />
        </header>
     );
}

export default Intro;