import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../panel/contentPanel";
import IconList from "../panel/iconList";
import CategoryListWrapper from "./categoryList.style";
import { Row, Col } from "antd";

const categoryList = props => {
  const categorys = props.categoryList;
  const categoryListClassname = "icon-list";

  return (
    <ContentPanel
      title={<IntlMessages id="top.categoryList.title" />}
      link_path="/store"
    >
      <CategoryListWrapper>
        {categorys &&
          categorys.map((category, index) => {
            return (
              <Row key={index}>
                <Col span={24} className={categoryListClassname}>
                  <h2>{category.category_title}</h2>
                  <IconList
                    className={categoryListClassname}
                    items={category.items}
                  />
                </Col>
              </Row>
            );
          })}
      </CategoryListWrapper>
    </ContentPanel>
  );
};

export default categoryList;
