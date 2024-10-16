import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Sellers from "../pages/dashboard/sellers/Sellers";
import Designers from "../pages/dashboard/designers/Designers";
import ContentsPage from "../pages/Content";
import Blog from "../pages/blogs";
import Video from "../pages/videos";
import Article from "../pages/articles";
// import { useAppKitAccount } from "@reown/appkit/react";
import { NotConnected } from "../components/ui/NotConnected";
import ItemDetails from "../pages/ItemDetails";

const AppRoutes = () => {
  // const { isConnected } = useAppKitAccount();

  const isConnected: boolean = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/dashboard"
          element={isConnected ? <Dashboard /> : <NotConnected />}
        />
        <Route path="/details" element={<ItemDetails />} />
        <Route path="/content" element={<ContentsPage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="*" element={"Not Found"} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
