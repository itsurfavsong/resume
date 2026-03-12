import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;