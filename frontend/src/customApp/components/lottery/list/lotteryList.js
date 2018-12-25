import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import Button from "../button.js";

const LotteryItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  font-size: 12px;
`;

const ListItem = styled.li`
  max-width: 160px;
  padding-bottom: 8px;
  margin-right: 16px;
`;

const ItemImg = styled.img`
  height: 160px;
  width: 160;
  margin-bottom: 8px;
`;

const ItemPrice = styled.p`
  margin-bottom: 4px;
`;

const Price = styled.span`
  margin: 0 2px;
  font-weight: bold;
`;

const LinkStyle = {
  textDecoration: "underline",
  color: "#333"
};

const CommonButton = ({ style, text }) => {
  return (
    <Button style={style}>
      <IntlMessages id={text} />
    </Button>
  );
};

const DistributesButton = ({ hasApply }) => {
  let style = { backgroundColor: "#595959", cursor: "default" };
  switch (hasApply) {
    case "before":
      style = { backgroundColor: "#810b1b", cursor: "pointer" };
      return (
        <NavLink to="lotteries">
          <CommonButton style={style} text={"lottery.apply"} />
        </NavLink>
      );
    case "done":
      return <CommonButton style={style} text={"lottery.applyDone"} />;
    case "end":
      return <CommonButton style={style} text={"lottery.applyEnd"} />;
    default:
      return null;
  }
};

const LotteryList = ({ listItems }) => {
  return (
    <LotteryItemList>
      {listItems &&
        listItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <NavLink to="lotteries" style={LinkStyle}>
                <ItemImg src={item.img} />
                <p>{item.title}</p>
              </NavLink>
              <ItemPrice>
                <IntlMessages id="lottery.taxIncluded" />
                <Price>{item.price}</Price>
                <IntlMessages id="lottery.yen" />
              </ItemPrice>
              <p>
                <DistributesButton hasApply={item.has_apply} />
              </p>
            </ListItem>
          );
        })}
    </LotteryItemList>
  );
};

export default LotteryList;
