import React from "react";
import {
  GithubOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Col, Row, Typography } from "antd";

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col>
          <Typography.Link href="tel:+963981512192" target="_blank">
            <WhatsAppOutlined twoToneColor="#eb2f96" />
          </Typography.Link>
          <Typography.Link href="madehayousof96@gmail.com" target="_blank">
            <MailOutlined />
          </Typography.Link>
          <Typography.Link href="" target="_blank">
            <GithubOutlined />
          </Typography.Link>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
