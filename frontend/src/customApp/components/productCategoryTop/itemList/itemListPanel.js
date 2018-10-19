import React from "react";
import styled from "styled-components";
import ContentPanel from "../../panel/contentPanel";
import { SeeMoreButton, NameWithItemCountButton } from "../../form/largeButton";
import ItemListHeader from "./itemListHeader";
import ItemView from "./itemView";

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

const StyledNameWithItemCountButton = styled(NameWithItemCountButton)`
  clear: both;
  text-align: center;
  margin-bottom: 20px;
`

const ItemListPanel = props => {
  const { item } = props;
  return (
    <ContentPanelWrapper
      extra={<ItemListHeader />}
      actions={[<SeeMoreButton />]}
    >
      {
        item && item.groups.map((group, index) => {
          return (
            <div key={index}>
              <GroupName>{group.group_name}</GroupName>
              {
                group.items.map((item, index) => {
                  return (
                    <ItemView {...item} key={index}/>
                  );
                })
              }
              <StyledNameWithItemCountButton name={group.group_name} count={group.total_number} />
            </div>
          );
        })
      }
    </ContentPanelWrapper>
  );
}

export default ItemListPanel;
