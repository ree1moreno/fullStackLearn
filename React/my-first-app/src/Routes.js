import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetsScreen from "./screens/Planets";

const PagesRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlanetsScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
