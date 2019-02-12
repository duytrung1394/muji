import React, { Component } from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import { Collapse } from "antd";
import ListItems from "./listItems";

const StoreLists = styled.div`
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

const PrefecturalDiv = styled.div`
  padding: 8px 0;
`;

const PrefecturalTitle = styled.h1`
  font-size: 15px;
  padding: 8px 0;
`;

const StyledCollapse = styled(Collapse)`
  .ant-collapse-item {
    border-top: #d9d9d9;
  }
`;

const StyledPanel = styled(Collapse.Panel)`
  &&& .ant-collapse-header {
    padding-left: 12px;
    & .arrow {
      left: auto;
      right: 12px;
    }
  }
  && .ant-collapse-content {
    padding: 0px;
  }
  &&& .ant-collapse-content-box {
    li {
      &:nth-child(even) {
        background-color: #f2f2f2;
      }
    }
  }
`;

const TestList = ({ storeData }) => {
  console.log(storeData);
  return (
    <PrefecturalDiv>
      <PrefecturalTitle>
        <IntlMessages id="productDetail.searchByPrefectural" />
      </PrefecturalTitle>
      <StoreLists>
        {storeData.map((store, index) => {
          console.log(store);
          return (
            <ListCol key={index}>
              <StyledCollapse bordered={false}>
                {
                  <StyledPanel header={store.area} key={index}>
                    <ListItems storeData={store.store_details} />
                  </StyledPanel>
                }
              </StyledCollapse>
            </ListCol>
          );
        })}
      </StoreLists>
    </PrefecturalDiv>
  );
};

export default TestList;
