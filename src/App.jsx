import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import About from "./pages/About";
import Team from "./pages/Team";
import Intro from "./pages/Intro";
import Synthesis from "./pages/Synthesis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="introduction" element={<Intro />} />
          <Route path="synthesis" element={<Synthesis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
