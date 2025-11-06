import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Base } from "./components/Base";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Projects from "./pages/Projects"

function App() {
  const location = useLocation();
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />

      {location.pathname !== "/projects" && <Navbar />}
      <Routes>
        <Route path="/*" element={<Base />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>



    </>
  );
}

export default App;
