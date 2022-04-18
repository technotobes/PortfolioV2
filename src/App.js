import { Routes, Route } from "react-router-dom"
import { BaseLayout, ProjectsLayout } from "./Layouts";

import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills"
import Pawster from "./components/Projects/Pawster";
import Lefties from "./components/Projects/Lefties";
import Cams from "./components/Projects/Cams";
import Pokepedia from "./components/Projects/Pokepedia";

import 'animate.css'

function App() {
  return (
      <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="/" element={<AboutMe />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/projects" element={<ProjectsLayout />}>
              <Route path="/projects/Pawster" element={<Pawster />}/>
              <Route path="/projects/Lefties" element={<Lefties />}/>
              <Route path="/projects/Cams" element={<Cams />}/>
              <Route path="/projects/Pokepedia" element={<Pokepedia />}/>
            </Route>
          </Route>
      </Routes>
  );
}

export default App;
