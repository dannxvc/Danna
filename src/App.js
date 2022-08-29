import './App.css';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
    return (
        <>
            <Intro/>
            <main>
                <AboutMe/>
                <MyProjects/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
