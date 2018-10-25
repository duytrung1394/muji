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
  border-bottom: 2px solid;
  width: fit-content;
  margin: 0 auto 40px;
`;

const ItemName = styled.span`
  padding: 0 10px;
`;

const SeeMoreButton = props => (
  <LargeButton>
    <IntlMessages id="productCategoryTop.button.seeMore" />
  </LargeButton>
);

const NameWithItemCountButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const NameWithItemCountButton = props => (
  <LargeButton {...props}>
    <IntlMessages
      id="productCategoryTop.button.nameWithItemCount"
      values={{ name: <ItemName>{props.name}</ItemName>, count: props.count }}
    />
  </LargeButton>
);

const ItemList = props => {
  const { groups } = props;

  return (
    <ContentPanelWrapper
      extra={<ItemListHeader />}
      actions={[<SeeMoreButton />]}
    >
      {groups &&
        groups.map((group, index) => {
          return (
            <div key={index}>
              <GroupName>{group.group_name}</GroupName>
              {group.items.map((item, index) => {
                return <ItemView {...item} key={index} />;
              })}
              <NameWithItemCountButtonWrapper>
                <NameWithItemCountButton
                  name={<ItemName>{group.group_name}</ItemName>}
                  count={group.total}
                />
              </NameWithItemCountButtonWrapper>
            </div>
          );
        })}
    </ContentPanelWrapper>
  );
};

export default ItemList;
