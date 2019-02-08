import React,{Component} from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import StockItem from "./stockItem"
// import AnchorLink from "react-anchor-link-smooth-scroll";
import Notices from "./notices"
import NearByStore from "./nearByStore"
// import SearchByPrefectural from "./searchByPrefectural"
import TestList from "./testList"
import styled from "styled-components";

const StockModal = styled.div`
  overflow: hidden;
`;

const ToTop = styled.a`
  float: right;
  padding: 16px 16px 0;
  font-size: 12px;
`;

class ItemStockModal extends Component{
  constructor(props){
    super(props)
    this.state={
      visible: false
    }
  }

  render(){
  return (
    <StockModal>
     <StockItem/>
     <Notices />
     <NearByStore />
     <TestList />
     {/* <SearchByPrefectural /> */}
     <ToTop href="http://localhost:4000/store/cmdty/detail/4550002684822#rcDialogTitle0">
        <IntlMessages id="productDetail.toTop"/>
      </ToTop>
    </StockModal>
  );
};
}
export default ItemStockModal;
