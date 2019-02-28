import React from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import { Collapse, Icon } from "antd";
import ListItems from "./listItems";

const Prefectures = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  & {
    > div {
      :nth-of-type(-n + 2) {
        border-top: 1px solid #d9d9d9;
      }
    }
  }
`;

const ListCol = styled.div`
  width: 48%;
  margin: 0 auto;
  &:last-child {
    margin-left: 13.797;
  }
`;

const StoreSearchDiv = styled.div`
  padding: 8px 0;
`;

const StoreSearchTitle = styled.h3`
  font-size: 15px;
  padding: 8px 0;
`;

const StyledCollapse = styled(Collapse)`
  &.ant-collapse > .ant-collapse-item {
    border-top: #d9d9d9;
    > .ant-collapse-header {
      padding-left: 0;
      > i {
        right: 12px;
        left: initial;
      }
    }
  }
`;

const StyledPanel = styled(Collapse.Panel)`
  .ant-collapse-header {
    padding-left: 0px;
  }
  .ant-collapse-content {
    padding: 0px;
    .ant-collapse-content-box {
      padding: 0 0 16px;
      li {
        &:nth-child(even) {
          background-color: #f2f2f2;
        }
      }
    }
  }
`;

const PrefectureList = ({ prefecture }) => {
  return (
    <ListCol>
      <StyledCollapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <Icon type="up" rotate={isActive ? 180 : 0} />
        )}
      >
        {
          <StyledPanel header={prefecture.area}>
            <ListItems prefectureDetails={prefecture.prefecture_details} />
          </StyledPanel>
        }
      </StyledCollapse>
    </ListCol>
  );
};

const StoreSearchByList = ({ prefectures }) => {
  return (
    <StoreSearchDiv>
      <StoreSearchTitle>
        <IntlMessages id="productDetail.searchByPrefectural" />
      </StoreSearchTitle>
      <Prefectures>
        {prefectures.map((prefecture, index) => {
          return <PrefectureList prefecture={prefecture} key={index} />;
        })}
      </Prefectures>
    </StoreSearchDiv>
  );
};

export default StoreSearchByList;
