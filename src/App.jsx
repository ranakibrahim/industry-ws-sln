import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/results" element={<ResultsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
