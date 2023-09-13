import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import VerifyEmail from "./Pages/VerifyEmail";
import ItemInfo from "./components/ItemInfo";
import Seller from "./Pages/Seller";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/itemInfo" element={<ItemInfo />} />
          <Route path="/seller" element={<Seller />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
