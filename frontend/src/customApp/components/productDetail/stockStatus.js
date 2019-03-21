import React, { Component } from "react";
import { Link } from "../shared/form/link";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";
import ItemStockModal from "./modal/itemStockModal";

const Base = styled.section`
  background-color: #f2f2f2;
  padding: 16px;
  margin-top: 24px;
`;

const StockTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-right: 24px;
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
`;

const StoreData = styled.li`
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: left;
  padding: 13px 16px;
  align-items: baseline;
  &:first-child {
    border-top: 1px solid #999;
  }
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

const StoreDetailItem = styled.div`
  width: calc(100% / 3);
  &:nth-child(2) {
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  &,
  &:hover,
  &:active,
  &:focus {
    color: #60b3fa;
  }
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

class StockStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { modal_data, store_stock_list } = this.props.entity;
    return (
      <Base>
        <StoresStock>
          <p>
            <StockTitle>
              <IntlMessages id="productDetail.stockState" />
            </StockTitle>
            <StyledLink to="#">
              <IntlMessages id="productDetail.storeSettings" />
            </StyledLink>
          </p>
          <StoreDataList>
            {store_stock_list &&
              store_stock_list.map((store, index) => {
                return (
                  <StoreData key={index}>
                    <StoreDetailItem>{store.name}</StoreDetailItem>
                    <StoreDetailItem>{store.state}</StoreDetailItem>
                  </StoreData>
                );
              })}
          </StoreDataList>
          <FindStore>
            <StyledButton style={FindButtonStyle} onClick={this.showModal}>
              <IntlMessages id="productDetail.findStoreWithInventory" />
            </StyledButton>
          </FindStore>
          <ItemStockModal
            modalData={modal_data}
            visible={this.state.visible}
            handleCancel={this.handleCancel}
          />
        </StoresStock>
      </Base>
    );
  }
}
export default StockStatus;
