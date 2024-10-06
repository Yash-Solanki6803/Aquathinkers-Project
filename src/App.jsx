import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import About from "./pages/About";
import Team from "./pages/Team";
import Intro from "./pages/Intro";
import Evolution from "./pages/Evolution";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="introduction" element={<Intro />} />
          <Route
            path="evolution"
            element={<Navigate to="/evolution/chemobacteria" />}
          />
          <Route path="evolution/:organism" element={<Evolution />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
