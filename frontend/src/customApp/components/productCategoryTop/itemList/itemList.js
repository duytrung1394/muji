import React from "react";
import styled from "styled-components";
import ContentPanel from "../../shared/panel/contentPanel";
import LargeButton from "../../shared/form/largeButton";
import ItemListHeader from "./itemListHeader";
import ItemView from "./itemView";
import IntlMessages from "../../../../components/utility/intlMessages";
import CategoriesInPage from "./categoriesInPage";
import Slider from "../../shared/slider";
import { Link } from "../../shared/form/link";
import eventLink from "../../../../image/event/ico-event-link.png";
import Preamble from "./preamble";

const ContentPanelWrapper = styled(ContentPanel)`
  .ant-card-head {
    padding: 0 !important;
  }
  .ant-card-extra {
    display: flex;
    width: 100%;
  }
  .ant-card-actions {
    border-top: none;
    background: transparent;
    margin: 120px 0px 100px;
    li span {
      width: 100%;
      max-width: 500px;
    }
  }
  .slick-track {
    display: flex;
  }
  .slick-slide {
    height: inherit;
  }
`;

const GroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 19px;
    font-weight: bold;
  }
  a img {
    height: 32px;
  }
`;

const StyledLargeButton = styled(LargeButton)`
  border-radius: 30px;
  border: 1px solid #999;
  background: #999;
  color: #fafafa;
  padding: 14px 0;
  :hover {
    color: #ffffff;
  }
`;

const ItemCountButtonWrapper = styled.div`
  text-align: center;
  margin: 30px 0 40px 0;
`;

const Separator = styled.span`
  padding: 0 10px;
  :after {
    content: "|";
  }
`;

const ItemCountButton = props => (
  <StyledLargeButton {...props}>
    <IntlMessages id="productCategoryTop.button.showList" />
    <Separator />
    <IntlMessages
      id="productCategoryTop.button.itemCount"
      values={{ count: props.count }}
    />
  </StyledLargeButton>
);

const getGroupItems = (group, isSliderScroll) => {
  return group.items.map((item, index) => {
    return (
      <ItemView
        isSlideScroll={isSliderScroll}
        cartAddFlg={group.cartAddFlg}
        {...item}
        key={index}
      />
    );
  });
};

const GroupItems = ({ group, isLastSection }) => {
  if (isLastSection) {
    return getGroupItems(group, false);
  } else {
    return <Slider>{getGroupItems(group, true)}</Slider>;
  }
};

const ItemList = props => {
  const {
    total,
    groups,
    categories_in_page,
    filterFlg,
    section_layout_type
  } = props;

  const isLastSection = section_layout_type === "LAST_SECTION";

  return (
    <ContentPanelWrapper
      extra={filterFlg ? <ItemListHeader total={total} /> : null}
    >
      {!categories_in_page &&
        groups &&
        groups.map((group, index) => {
          return (
            <div key={index}>
              {!group.description && (
                <GroupHeader>
                  <h1>{group.group_name}</h1>
                  {group.link && (
                    <Link to={group.link}>
                      <img src={eventLink} alt="" />
                    </Link>
                  )}
                </GroupHeader>
              )}
              {group.description && (
                <Preamble
                  title={group.group_name}
                  description={group.description}
                  img={group.img}
                />
              )}

              <GroupItems group={group} isLastSection={isLastSection} />

              {!isLastSection && (
                <ItemCountButtonWrapper>
                  <ItemCountButton
                    name={group.group_name}
                    count={group.itemCount}
                  />
                </ItemCountButtonWrapper>
              )}
            </div>
          );
        })}

      {categories_in_page && (
        <CategoriesInPage categories={categories_in_page} groups={groups} />
      )}
    </ContentPanelWrapper>
  );
};

export default ItemList;
