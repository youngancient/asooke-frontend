import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Test from "./pages/Test";
import LandingPage from "./pages/LandingPage";

function App() {
  const location = useLocation();

  return (
    <>
      {/* header */}
      <h1>AsoOke</h1>
      <Routes key={location.pathname} location={location}>
        <Route index element={<LandingPage />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
      {/* footer */}
    </>
  );
}

export default App;
