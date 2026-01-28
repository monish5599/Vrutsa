import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdminDashboard from "./components/AdminDashboard";

function App_Temp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App_Temp;
