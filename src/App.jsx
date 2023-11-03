import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';import About from './components/About/About';
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
    </div>
  );
}

export default App;
