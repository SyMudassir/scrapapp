import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/home";
import Header from "./component/header";
import Footer from "./component/footer";
import Scraprates from "./component/scraprates";
import Schedule from "./component/schedule";
import ProtectedRoute from "./component/ProtectedRoute";
import { AuthProvider } from "./component/fAuthContext"; // ✅ Import AuthProvider
import "./App.css";

function App() {
  return (
    <div className="bodysection">
      {/* ✅ Wrap everything inside AuthProvider */}
      <AuthProvider>
        <Router>
          <Header />

          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/scraprates"
              element={
                <ProtectedRoute>
                  <Scraprates />
                </ProtectedRoute>
              }
            />
            <Route
              path="/schedule"
              element={
                <ProtectedRoute>
                  <Schedule />
                </ProtectedRoute>
          
              }
            />
          </Routes>

          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
