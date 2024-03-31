import React from "react";
import Header from "./layouts/header";
import Sidebar from "./layouts/sidebar";
import Content from "./layouts/content";
import Footer from "./layouts/footer";
import { Space } from "antd";
import AppRouting from "./routing";

function App() {
  return (
    <div className="app">
      <Header />
      <Space className="app-content">
        <Sidebar></Sidebar>
        <Content></Content>
      </Space>
      <Footer />
    </div>
  );
}

export default App;
