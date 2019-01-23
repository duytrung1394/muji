import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../shared/panel/contentPanel";
import IconList from "../shared/panel/iconList";
import { CategoryBoxCol, CategoryTitle } from "./categoryList.style";
import { Row } from "antd";

const categoryList = props => {
  const categories = props.categoryList;

  return (
    <ContentPanel
      title={<IntlMessages id="top.categoryList.title" />}
      link_path="/store"
    >
      {categories &&
        categories.map((category, index) => {
          return (
            <Row key={index}>
              <CategoryBoxCol span={24}>
                <CategoryTitle>{category.category_title}</CategoryTitle>
                <IconList items={category.items} />
              </CategoryBoxCol>
            </Row>
          );
        })}
    </ContentPanel>
  );
};

export default categoryList;
