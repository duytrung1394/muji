import React,{Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Breadcrumb, Row, Col, Popover, Input, Modal, Select, Checkbox} from "antd";

const {Option} = Select;

const ModalContent = styled.div`
  h1 {
    font-size: 15px;
  }

  h2 {
    font-size: 13px;
    margin-top: 15px;
  }
`;

const CategoryCheckbox = styled.div`
  display: flex;
  flex-wrap: wrap;

  & label {
    min-width: 40%;
    padding-top: 15px;
    margin-right: 10%;
    font-size: 13px;
  
    & + label {
      margin-left: 0 !important;
    }
  
    &:nth-child(1), &:nth-child(2){
      padding-top: 0px;
    }

    & span input {
      background-color: red;
    }
  }
`;

const OrderSearchButton = styled.p`
  max-width: 300px;
  margin: 20px auto 0;
  text-align: center;

  button {
    border: 1px solid #999;
    border-radius: 20px;
    border-shadow: 0 1px 3px rgb(0, 0, 0, 0.65);
    font-size: 12px;
    width: 100%;
    padding: 10px;
    outline: none;
  }

  button, button:hover, button:focus {
    color: #585858;
    text-decoration: none;
  }
`;

const yearSelect = {
  minWidth: "calc(4em + 22px + 12px)"
};

const monthSelect = {
  minWidth: "calc(2em + 22px + 12px)"
}


const yearList = [
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
];

const monthList = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const categoryList = [
  "お買い得",
  "衣料品",
  "子供・マタニティ",
  "家具・インテリア・家電",
  "ヘルス&ビューティー",
  "雑貨・日用品",
  "食品",
  "花・グリーン",
  "産地直送",
];

const Label = styled.label`
  padding: 0 5px;
  vertical-align: bottom;
  font-size: 12px;
`;

// let defaultYear = "2019";
// let defaultMonth = "1";
let defaultYear = "";
let defaultMonth = "";

const DateWrapper = styled.div`
  margin-top: 15px;
`;

const OrderSearchModal = () => {
    return(
      <ModalContent>
      <h1><IntlMessages id="item.search.show" /></h1>
        <Input placeholder="フリーワード検索" />
        <h2>購入期間</h2>
        <DateWrapper>
        <Select style={yearSelect} defaultValue={defaultYear} >
          {
          yearList.map((value, index) => {
            return (
            <Option key={index} value={value}>{value}</Option>
            )
          })
          }
        </Select>
        <Label>年</Label>
        <Select style={monthSelect} defaultValue={defaultMonth}>
          {
          monthList.map((value, index) => {
            return (
            <Option key={index} value={value}>{value}</Option>
            )
          })
          }
        </Select>
        <Label>月 から</Label>
        </DateWrapper>
        <DateWrapper>
        <Select style={yearSelect} defaultValue={defaultYear}>
          {
          yearList.map((value, index) => {
            return (
            <Option key={index} value={value}>{value}</Option>
            )
          })
          }
        </Select>
        <Label>年</Label>
        <Select style={monthSelect} defaultValue={defaultMonth}>
          {
          monthList.map((value, index) => {
            return (
            <Option key={index} value={value}>{value}</Option>
            )
          })
          }
        </Select>
        <Label>月</Label>
        </DateWrapper>
        <h2><IntlMessages id="item.show.category.title" /></h2>
        <CategoryCheckbox>
        {
          categoryList.map((value, index) => {
          return (
            <Checkbox key={index}>{value}</Checkbox>
          )
          })
        }
        </CategoryCheckbox>
        <OrderSearchButton>
          <button to={"#"} >この条件で検索する</button>
        </OrderSearchButton>
      </ModalContent>
    )
  }
export default OrderSearchModal;