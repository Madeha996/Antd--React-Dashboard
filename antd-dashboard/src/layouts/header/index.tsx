import React from "react";
import { Col, Image } from "antd";

const Header = () => {
  return (
    <header className="header">
      <Col span={8}>
        <Image preview={false} src="" alt="logo-image" />
      </Col>
      <Col span={8}>
        <h1>Antd Dashboard</h1>
      </Col>
      <Col span={8}></Col>
    </header>
  );
};

export default Header;
