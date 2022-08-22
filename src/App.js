import './App.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
import {Hero, About, WorkedAt, WorkedOn, Contact, Footer} from './containers/index'

function App() {
  useEffect(() => {
    Aos.init({duration: 600})
  }, []);

  return (
    <div className="App">
      <Hero aos='fade-up'/>
      <About aos='fade-up'/>
      <WorkedAt aos='fade-up'/>
      <WorkedOn aos='fade-up'/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
