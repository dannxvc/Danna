import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import MyProjects from './components/MyProjects';

function App() {
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

export default App;
