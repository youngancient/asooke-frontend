import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Content from "../pages/Content";
import Blog from "../pages/blogs";
import Video from "../pages/videos";
import Article from "../pages/articles";
import { useAppKitAccount } from "@reown/appkit/react";
import { NotConnected } from "../components/ui/NotConnected";

const AppRoutes = () => {
  const { isConnected } = useAppKitAccount();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={isConnected ? <Dashboard /> : <NotConnected />}
        />
        <Route path="/content" element={<Content />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/articles" element={<Article />} />
        <Route path="*" element={"Not Found"} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
