import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../panel/contentPanel";
import IconList from "../panel/iconList";
import categoryListWrapper from "./categoryList.style";
import { Row, Col } from "antd";

const style = {
  borderBottom: '1px solid #eee'
};

const categoryList = props => {
  const categorys = props.categoryList;
  return (
    <ContentPanel
      title={<IntlMessages id="top.categoryList.title" />}
      link_path="/store"
      bordered={false}
      style={{ style }}
    >
      {categorys &&
        categorys.map((category, index) => {
          return (
            <Row>
              <Col span={24} style={style}>
                <IconList className="icon-list" childClassName="list-icon" items={category.items} iconSize={60} key={index} wrapper={categoryListWrapper}/>
              </Col>
            </Row>
          );
      })}
    </ContentPanel>
  );
};

export default categoryList;
