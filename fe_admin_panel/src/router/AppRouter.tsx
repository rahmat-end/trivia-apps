/** @format */

// src/router/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/LoginPages";
import Register from "../pages/RegisterPages";
<<<<<<< HEAD
import Dahsboard from "../pages/DahsboardPages";
=======
import Dashboard from "../pages/DahsboardPages";
>>>>>>> 49d105ff244509fb4eb101c5ea8040a14717b06e

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
<<<<<<< HEAD

        <Route
          path='/dahsboard'
          element={<Dahsboard />}
=======
        <Route
          path='/dahsboard'
          element={<Dashboard />}
>>>>>>> 49d105ff244509fb4eb101c5ea8040a14717b06e
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
