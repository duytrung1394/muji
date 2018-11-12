import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import Video from "./video";

const itemLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12
};

const StyledImage = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 19px;
  color: #333;
`;

class Overview extends Component {
  render() {
    const { title, mainItem, detailItems } = this.props;
    return (
      <Row gutter={16}>
        <Col {...itemLayout}>
          <Row>
            {mainItem && (
              <Col span={24}>
                <StyledImage
                  src={mainItem.url}
                  alt={mainItem.title}
                  title={mainItem.title}
                />
              </Col>
            )}
            {detailItems &&
              detailItems.map(
                (item, index) =>
                  item.type === "image" ? (
                    <Col span={12} style={{ padding: "1px" }} key={index}>
                      <StyledImage src={item.url} key={index} />
                    </Col>
                  ) : item.type === "video" ? (
                    <Col span={12} style={{ padding: "1px" }} key={index}>
                      <Video
                        url={item.url}
                        poster={item.poster}
                        type="video/mp4"
                        controls
                      />
                    </Col>
                  ) : null
              )}
          </Row>
        </Col>
        <Col {...itemLayout}>
          <Title>{title}</Title>
        </Col>
      </Row>
    );
  }
}

export default Overview;
