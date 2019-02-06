import React, { Component } from "react";
import styled from "styled-components";
import ContentPanel from "../../shared/panel/contentPanel";
import LargeButton from "../../shared/form/largeButton";
import ItemListHeader from "./itemListHeader";
import ItemView from "./itemView";
import IntlMessages from "../../../../components/utility/intlMessages";
import CategoriesInPage from "./categoriesInPage";
import { defaultSettings } from "../../shared/slider";
import Slider from "react-slick";
import eventLink from "../../../../image/event/ico-event-link.png";

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
  .next,
  .previous {
    height: 32px;
  }
  .previous {
    cursor: pointer;
    transform: scale(-1, 1);
  }
  .next {
    cursor: pointer;
    margin-left: 40px;
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

const SeeMoreButton = props => (
  <StyledLargeButton>
    <IntlMessages id="productCategoryTop.button.seeMore" />
  </StyledLargeButton>
);

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

class ItemList extends Component {
  state = {
    slider: []
  };

  next = index => {
    this.state.slider[index].slickNext();
  };

  previous = index => {
    this.state.slider[index].slickPrev();
  };

  render() {
    const { total, groups, categories_in_page } = this.props;

    return (
      <ContentPanelWrapper
        extra={<ItemListHeader total={total} />}
        actions={categories_in_page ? [] : [<SeeMoreButton />]}
      >
        {!categories_in_page &&
          groups &&
          groups.map((group, index) => {
            return (
              <div key={index}>
                <GroupHeader>
                  <h1>{group.group_name}</h1>
                  <div>
                    <img
                      className="previous"
                      src={eventLink}
                      onClick={() => this.previous(index)}
                    />
                    <img
                      className="next"
                      src={eventLink}
                      onClick={() => this.next(index)}
                    />
                  </div>
                </GroupHeader>
                <Slider
                  {...defaultSettings}
                  ref={slider => (this.state.slider[index] = slider)}
                >
                  {group.items.map((item, index) => {
                    return (
                      <ItemView isSlideScroll={true} {...item} key={index} />
                    );
                  })}
                </Slider>
                <ItemCountButtonWrapper>
                  <ItemCountButton
                    name={group.group_name}
                    count={group.total}
                  />
                </ItemCountButtonWrapper>
              </div>
            );
          })}

        {categories_in_page && (
          <CategoriesInPage categories={categories_in_page} groups={groups} />
        )}
      </ContentPanelWrapper>
    );
  }
}

export default ItemList;
