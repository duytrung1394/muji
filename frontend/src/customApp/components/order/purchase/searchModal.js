import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import DateInput from "./dateInput";
import { Input, Checkbox } from "antd";

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

    &:nth-child(1),
    &:nth-child(2) {
      padding-top: 0px;
    }

    & span input {
      background-color: red;
    }
  }
`;

const SearchButton = styled.p`
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

  button,
  button:hover,
  button:focus {
    color: #585858;
    text-decoration: none;
  }
`;

const categoryList = [
  "お買い得",
  "衣料品",
  "子供・マタニティ",
  "家具・インテリア・家電",
  "ヘルス&ビューティー",
  "雑貨・日用品",
  "食品",
  "花・グリーン",
  "産地直送"
];

const SearchModal = () => {
  return (
    <ModalContent>
      <h1>
        <IntlMessages id="item.search.show" />
      </h1>
      <Input placeholder="フリーワード検索" />
      <h2>
        <IntlMessages id="order.purchaseHistory.searchModal.period.title" />
      </h2>
      <DateInput from />
      <DateInput />
      <h2>
        <IntlMessages id="item.show.category.title" />
      </h2>
      <CategoryCheckbox>
        {categoryList.map((value, index) => {
          return <Checkbox key={index}>{value}</Checkbox>;
        })}
      </CategoryCheckbox>
      <SearchButton>
        <button to={"#"}>
          <IntlMessages id="order.purchaseHistory.searchModal.submit" />
        </button>
      </SearchButton>
    </ModalContent>
  );
};
export default SearchModal;
