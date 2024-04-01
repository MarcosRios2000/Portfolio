import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
// import Projects from './components/Projects';


function App() {
 
  const color = "cyan";

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Experience color={color} />
      {/* <Projects color={color} /> */}
      <Contact color={color} />
      {/* <Footer /> */}
    </>
  );
}

export default App;

