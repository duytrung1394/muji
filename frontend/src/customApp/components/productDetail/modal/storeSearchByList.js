import React from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import { Collapse, Icon } from "antd";
import { Row, Col } from "antd";
import ListItems from "./listItems";

const PrefectureListCol = styled(Col)`
  padding: 0 10px;
`;

const StyledCollapse = styled(Collapse)`
  &&& .ant-collapse-header {
    padding-left: 0;
    > i {
      right: 12px;
      left: initial;
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
    <PrefectureListCol xs={12}>
      <StyledCollapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <Icon type="up" rotate={isActive ? 0 : 180} />
        )}
      >
        {
          <StyledPanel header={prefecture.area}>
            <ListItems prefectureDetails={prefecture.prefecture_details} />
          </StyledPanel>
        }
      </StyledCollapse>
    </PrefectureListCol>
  );
};

const StyledStoreSearchByList = styled.div`
  padding: 8px 0;
`;

const StoreSearchTitle = styled.h3`
  font-size: 15px;
  padding: 8px 0;
`;

const PrefectureListRow = styled(Row)`
  > div:nth-of-type(-n + 2) {
    .ant-collapse-item {
      border-top: 1px solid #d9d9d9;
    }
  }
`;

const StoreSearchByList = ({ prefectures }) => {
  return (
    <StyledStoreSearchByList>
      <StoreSearchTitle>
        <IntlMessages id="productDetail.searchByPrefectural" />
      </StoreSearchTitle>
      <PrefectureListRow>
        {prefectures.map((prefecture, index) => {
          return <PrefectureList prefecture={prefecture} key={index} />;
        })}
      </PrefectureListRow>
    </StyledStoreSearchByList>
  );
};

export default StoreSearchByList;
