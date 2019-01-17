import React from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";

const StockTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-right: 24px;
`;

const Base = styled.section`
  background-color: #f2f2f2;
  padding: 16px;
`;

const StoresStock = styled.div`
  box-shadow: rgba(153, 153, 153, 0.5) 0px 1px 3px 1px;
  padding: 20px;
  background-color: #fff;
  font-size: 12px;
`;

const StoreDataList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const StoreData = styled.li`
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  width: 48%;
  display: flex;
  justify-content: space-between;
  padding: 13px 16px;
  align-items: baseline;
`;

const FindStore = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  border-radius: 20px;
  border: 1px solid #7f0019;
  line-height: 1;
  box-shadow: 0px 0px 5px #e4e4e4;
  font-size: 11px;
  text-align: center;
  padding: 6px 20px 4px;
  color: #7f0019;
  cursor: pointer;
  background-color: #fff;
`;

const FindButtonStyle = {
  border: "1px solid #999",
  boxShadow: "0 1px 3px rgba(88, 88, 88, 0.3)",
  fontSize: "12px",
  color: "#555",
  width: "300px",
  height: "40px",
  marginTop: "16px"
};

const CommonButton = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StockStatus = () => {
  return (
    <Base>
      <StoresStock>
        <p>
          <StockTitle>
            <IntlMessages id="productDetail.stockState" />
          </StockTitle>
          <span>
            <Link to="#">
              <IntlMessages id="productDetail.storeSettings" />
            </Link>
          </span>
        </p>
        <StoreDataList>
          {/* map */}
          <StoreData>
            <span>新宿</span>
            <span>あり</span>
            <CommonButton>店舗で取置</CommonButton>
          </StoreData>
          <StoreData>
            <span>有楽町</span>
            <span>なし</span>
            <CommonButton>店舗で取置</CommonButton>
          </StoreData>
        </StoreDataList>
        <FindStore>
          <CommonButton style={FindButtonStyle}>
            <IntlMessages id="productDetail.findStoreWithInventory" />
          </CommonButton>
        </FindStore>
      </StoresStock>
    </Base>
  );
};

export default StockStatus;
