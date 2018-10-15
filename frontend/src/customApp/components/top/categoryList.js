import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../panel/contentPanel";
import IconList from "../panel/iconList";
import categoryListWrapper from "./categoryList.style";
import { Row, Col } from "antd";

const contentPanelStyle = {
  borderBottom: "1px solid #eee",
  marginBottom: "15px"
};

const categoryList = props => {
  const categorys = props.categoryList;
  return (
    <ContentPanel
      title={<IntlMessages id="top.categoryList.title" />}
      link_path="/store"
      bordered={false}
    >
      {categorys &&
        categorys.map((category, index) => {
          return (
            <Row>
              <Col span={24} style={contentPanelStyle}>
                <h2
                  style={{
                    padding: "0 0 6px",
                    fontWeight: "600",
                    color: "#555"
                  }}
                >
                  {category.category_title}
                </h2>
                <IconList
                  className="icon-list"
                  childClassName="list-icon"
                  items={category.items}
                  iconSize={60}
                  key={index}
                  wrapper={categoryListWrapper}
                />
              </Col>
            </Row>
          );
        })}
    </ContentPanel>
  );
};

export default categoryList;
