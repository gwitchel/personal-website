import './App.css';
import Navbar from './components/Navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tech from "./pages/Tech";
import Climbing from "./pages/Climbing";
import Creative from "./pages/Creative";
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';

import Clinic from './pages/tech-pages/Clinic';
import DinosaurTrain from './pages/tech-pages/DinosaurTrain';
import MOCHAZine from './pages/tech-pages/MOCHAZine'
import RemoteCarabeaner from  './pages/tech-pages/RemoteCarabeaner'
import ScientificComputing from './pages/tech-pages/ScientificComputing'
import ShrinkVille from './pages/tech-pages/ShrinkVille'
import Desmond from './pages/tech-pages/Desmond'

import Films from './pages/climbing-pages/Films'
import JuniorOlympics from './pages/climbing-pages/JuniorOlympics'
import Skiing from './pages/climbing-pages/Skiing'
import TCA from './pages/climbing-pages/TCA'
import USAIce from './pages/climbing-pages/USAIce'
import WorldCup from './pages/climbing-pages/WorldCup.js'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<AboutMe />} />
          <Route path="resume" element={<Resume />} />
          <Route path="alpinism" element={<Climbing />}>
            <Route path="Films" element={<Films />} />
            <Route path="TCA" element={<TCA />} />
            <Route path="USAIce" element={<USAIce />} />
            <Route path="JuniorOlympics" element={<JuniorOlympics />} />
            <Route path="Skiing" element={<Skiing />} />
            <Route path="WorldCup" element={<WorldCup />} />

          </Route>
          <Route path="portfolio" element={<Tech />}> 
            <Route path="clinic" element={<Clinic />} />
            <Route path="DinosaurTrain" element={<DinosaurTrain />} />
            <Route path="Desmond" element={<Desmond />} />
            <Route path="MOCHAZine" element={<MOCHAZine />} />
            <Route path="RemoteCarabeaner" element={<RemoteCarabeaner />} />
            <Route path="ScientificComputing" element={<ScientificComputing />} />
            <Route path="ShrinkVille" element={<ShrinkVille />} />
          </Route>
          <Route path="Creative"  forceRefresh={true} element={<Creative />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <Navbar></Navbar>
    //   </header>
    // </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);