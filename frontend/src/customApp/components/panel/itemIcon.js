import React from "react";
import { Row, Col } from "antd";
import { LinkIcon, IconImg } from "./itemIcon.style";

const itemIcon = props => {
  const { item } = props;
  return (
    <Row>
      <Col xl={{ span: 4 }} md={{ span: 6 }} xs={{ span: 12 }}>
        <LinkIcon to="" className="item-icon">
          <IconImg src={item.img_src} alt="" />
          {item.title && <span>{item.title}</span>}
        </LinkIcon>
      </Col>
    </Row>
  );
};

export default itemIcon;
