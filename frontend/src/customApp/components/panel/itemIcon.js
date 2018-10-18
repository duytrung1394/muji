import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "antd";
import ItemIconWrapper from "./itemIcon.style";

const itemIcon = props => {
  return (
    <ItemIconWrapper>
      <Row>
        <Col xl={{ span: 4 }} md={{ span: 6 }} xs={{ span: 12 }}>
          <Link to="" className="item-icon">
            <img src={props.item.img_src} alt="" />
            {props.item.title && <span>{props.item.title}</span>}
          </Link>
        </Col>
      </Row>
    </ItemIconWrapper>
  );
};

export default itemIcon;
