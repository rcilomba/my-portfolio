import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Works />
        <Contact />
      </main>
    </>
  );
}

export default App;
