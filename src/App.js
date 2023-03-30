import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Nav';


import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/education" element={<Education/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
