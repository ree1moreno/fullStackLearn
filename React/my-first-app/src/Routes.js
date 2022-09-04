import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetScreen from "./screens/Planet";
import PlanetsScreen from "./screens/Planets";

const PagesRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlanetsScreen />} />
        <Route path="/planet/:id" element={<PlanetScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
