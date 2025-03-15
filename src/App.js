import logo from './logo.svg';
import './App.css';
import LandingPage from './component/LandingPage';
import Introduction from './component/Introduction';
import Skill from './component/Skill';
import Project from './component/Project';
import Contact from './component/Contact';
import FoodFinder from './component/FoodFinder';
import Pokedex from './component/Pokedex';
import WebPortfolio from './component/WebPortfolio';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router >
      <Routes>
        {/* 기본 경로에서 전체 페이지 렌더링 */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Introduction />
              <Skill />
              <Project />
              <Contact />
            </>
          }
        />
        
        {/* 개별 프로젝트 경로 */}
        <Route path="/foodFinder" element={<FoodFinder />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/webPortfolio" element={<WebPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
