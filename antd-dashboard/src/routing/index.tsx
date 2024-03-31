import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Inventory from "../pages/inventory";
import Customers from "../pages/customers";
import Orders from "../pages/orders";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
};

export default AppRouting;
