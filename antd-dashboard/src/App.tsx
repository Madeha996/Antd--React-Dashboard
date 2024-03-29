import React from "react";
import Header from "./layouts/header";
import Sidebar from "./layouts/sidebar";
import Content from "./layouts/content";
import Footer from "./layouts/Footer";
import { Space } from "antd";

function App() {
  return (
    <div className="app">
      <Header />
      <Space>
        <Sidebar></Sidebar>
        <Content></Content>
      </Space>
      <Footer />
    </div>
  );
}

export default App;
