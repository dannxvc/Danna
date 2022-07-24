import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import MyProjects from "./MyProjects";

function Layout() {
    return ( 
        <div className="App">
            <Intro/>
            <AboutMe/>
            <MyProjects/>
            <Contact/>
            <Footer/>
        </div>
     );
}

export default Layout;