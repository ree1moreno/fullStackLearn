import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./screens/NotFound";
import PlanetScreen from "./screens/Planet";
import PlanetsScreen from "./screens/Planets";

const PagesRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlanetsScreen />} />
        <Route path="/planet/:id" element={<PlanetScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
