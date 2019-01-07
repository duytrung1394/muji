import React from "react";
import styled from "styled-components";
import ContentPanel from "../../panel/contentPanel";
import LargeButton from "../../form/largeButton";
import ItemListHeader from "./itemListHeader";
import ItemView from "./itemView";
import IntlMessages from "../../../../components/utility/intlMessages";

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
`;

const GroupName = styled.h1`
  font-size: 19px;
  font-weight: bold;
`;

const ItemName = styled.span`
  padding: 0 10px;
`;

const ItemViewWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
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

const ItemList = props => {
  const { total, groups } = props;

  return (
    <ContentPanelWrapper
      extra={<ItemListHeader total={total} />}
      actions={[<SeeMoreButton />]}
    >
      {groups &&
        groups.map((group, index) => {
          return (
            <div key={index}>
              <GroupName>{group.group_name}</GroupName>
              <ItemViewWrapper>
                {group.items.map((item, index) => {
                  return <ItemView {...item} key={index} />;
                })}
              </ItemViewWrapper>
              <ItemCountButtonWrapper>
                <ItemCountButton name={group.group_name} count={group.total} />
              </ItemCountButtonWrapper>
            </div>
          );
        })}
    </ContentPanelWrapper>
  );
};

export default ItemList;
