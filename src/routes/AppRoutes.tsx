import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Content from "../pages/Content";
import Blog from "../pages/blogs";
import Video from "../pages/videos";
import Article from "../pages/articles";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={"Not Found"} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/content" element={< Content/>}/>
        <Route path="/blogs"  element={< Blog/>}/>
        <Route path="/videos"  element={< Video/>}/>
        <Route path="/articles"  element={< Article/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
