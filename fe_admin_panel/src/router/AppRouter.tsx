/** @format */

// src/router/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/LoginPages";
import Register from "../pages/RegisterPages";
import Dashboard from "../pages/DahsboardPages";


const AppRouter: React.FC = () => {
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
        <Route
          path='/dahsboard'
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
