import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Sellers from "../pages/dashboard/sellers/Sellers";
import Designers from "../pages/dashboard/designers/Designers";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={"Not Found"} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/designers" element={<Designers />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
