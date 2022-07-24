import "../css/Intro.css";
import NavBar from "./NavBar";
function Intro() {
    return ( 
        <header className="header" id="intro">
            <p className="intro-greet">Hi! I'm</p> 
            <h1>Danna.</h1>
            <p className="intro-description">I am a very passionate software engineering student. I am interested in frontend and backend development.</p>
            <NavBar></NavBar>
        </header>
     );
}

export default Intro;