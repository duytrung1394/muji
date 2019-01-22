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

const DistributesButton = ({ hasApply }) => {
  const backgroundColor = hasApply === "before" ? "#810b1b" : "#595959";

  if (["before", "done", "end"].find(type => type === hasApply)) {
    return (
      <Button style={{ backgroundColor }}>
        <IntlMessages id={`lottery.apply.${hasApply}`} />
      </Button>
    );
  } else {
    return null;
  }
};

const LotteryList = ({ listItems }) => {
  return (
    <LotteryItemList>
      {listItems &&
        listItems.map((item, index) => {
          return (
            <NavLink
              to={"/store/lucky/section_code/jan_code"}
              tag="li"
              key={index}
              style={{
                maxWidth: "160px",
                paddingBottom: "8px",
                margin: "1%",
                color: "#333"
              }}
            >
              <ItemImg src={item.img} />
              <p>{item.title}</p>
              <ItemPrice>
                <IntlMessages
                  id="lottery.price"
                  values={{
                    price: <Price>{item.price}</Price>
                  }}
                />
              </ItemPrice>
              <DistributesButton hasApply={item.has_apply} />
            </NavLink>
          );
        })}
    </LotteryItemList>
  );
};

export default LotteryList;
