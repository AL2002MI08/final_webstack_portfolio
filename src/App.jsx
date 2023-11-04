import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;