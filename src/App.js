import logo from './logo.svg';
import './App.css';
import LandingPage from './component/LandingPage';
import Introduction from './component/Introduction';
import Skill from './component/Skill';
import Project from './component/Project';
import Contact from './component/Contact';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <LandingPage />
        <Introduction />
        <Skill />
        <Project />
        <Contact />
      </div>
    <Routes>
  
    </Routes>
    </Router>
  );
}

export default App;
