import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./component/LandingPage";
import Introduction from "./component/Introduction";
import Skill from "./component/Skill";
import Project from "./component/Project";
import Contact from "./component/Contact";
import FoodFinder from "./component/FoodFinder";
import Pokedex from "./component/Pokedex";
import WebPortfolio from "./component/WebPortfolio";
import CustomCursor from "./component/CustomCursor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";




function App() {
  



  return (
    <Router>
      <CustomCursor />
      <Routes>
       
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

        
        <Route path="/foodFinder" element={<FoodFinder />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/webPortfolio" element={<WebPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
