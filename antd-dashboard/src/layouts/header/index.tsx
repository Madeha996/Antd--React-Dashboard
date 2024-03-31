import React from "react";
import { Col, Image, Badge, Row } from "antd";
import { MessageOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header className="header">
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <Image
            preview={false}
            src="/logo.png"
            alt="logo-image"
            width={50}
            height={50}
          />
        </Col>
        <Col>
          <h1>Antd Dashboard</h1>
        </Col>
        <Col>
          <Badge count={10} color="orange">
            <MessageOutlined style={{ fontSize: "25px" }} />
          </Badge>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
