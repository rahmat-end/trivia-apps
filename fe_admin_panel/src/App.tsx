/** @format */

// import React from "react";
import Home from "./pages/home.tsx";
import Login from "./pages/LoginPages.tsx";
import Register from "./pages/RegisterPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
