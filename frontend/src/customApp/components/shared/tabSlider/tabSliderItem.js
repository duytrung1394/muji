import { Icon, Popover } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export const Item = styled.section`
  width: calc((100% - 60px) / 3);
  margin: 20px 30px 0 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgb(0, 0, 0, 0.65);
  box-sizing: border-box;
  font-size: 12px;

  &:nth-child(3n) {
    margin-right: 0;
  }

  a,
  a:hover,
  a:focus {
    text-decoration: none;
  }
`;

export const ItemHeader = styled.div`
  margin-top: 20px;
  padding: 0 16px;
  font-size: 10px;
  overflow: hidden;
`;

export const ItemMain = styled.div`
  position: relative;
  margin-top: 9px;
  min-height: 119px;
  display: flex;
  flex-wrap: nowrap;
  padding: 9px 65px 9px 16px;
  border-top: 1px solid rgb(229, 229, 229);
`;

export const ItemFooter = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

export const ItemFooterButtonWrapper = styled.li`
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  list-style-type: none;
  list-style: none;

  &:nth-child(2n) {
    border-left: 1px solid #e5e5e5;
  }

  a,
  p {
    display: block;
    padding: 12px 24px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  a,
  a:hover,
  a:focus {
    color: rgba(0, 0, 0, 0.65);
  }

  p {
    margin-bottom: 0;
  }

  i {
    position: absolute;
    height: 14px;
    font-size: 14px;
    font-weight: bold;
    margin: auto;
    top: 0px;
    right: 3%;
    bottom: 0px;
  }
`;

export const ItemFooterButton = props => {
  const { text } = props;
  const initProps = {
    draggable: false,
    to: "#"
  };
  return (
    <ItemFooterButtonWrapper>
      <Link {...initProps} {...props}>
        {text && text}
        <Icon type="right" />
      </Link>
    </ItemFooterButtonWrapper>
  );
};

const ItemImageWrapper = styled.div`
  max-width: 120px;
  width: 40%;

  img {
    width: 100%;

    a {
      display: block;
    }
  }
`;

export const ItemImage = props => {
  const { src } = props;

  const initProps = {
    to: "#"
  };

  return (
    <ItemImageWrapper>
      <Link {...initProps} {...props}>
        {src && <img src={src} alt="" />}
      </Link>
    </ItemImageWrapper>
  );
};

export const ItemDescribeList = styled.ul`
  margin-left: 15px;
  margin-bottom: 0px;
  width: calc(80% - 15px);
  padding: 0;
  list-style: none;
  line-height: 20px;
`;

export const ItemDescribe = styled.li`
  line-height: 20px;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
  }
`;

const EllipsisButtonWrapper = styled.div`
  width: 49px;
  position: absolute;
  bottom: 10px;
  right: 16px;
  cursor: pointer;
`;

const Ellipsis = styled.button`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgb(0, 0, 0, 0.65);
  font-size: 30px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.36);
  border: 1px solid rgba(0, 0, 0, 0.36);

  i {
    position: absolute;
    height: 30px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    margin: auto;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const EllipsisButton = props => {
  return (
    <EllipsisButtonWrapper>
      <Popover {...props}>
        <Ellipsis>
          <Icon type="ellipsis" />
        </Ellipsis>
      </Popover>
    </EllipsisButtonWrapper>
  );
};

export const PopoverContentWrapper = styled.ul`
  margin: -10px;
  padding: 0;
  border-bottom: 1px solid rgb(153, 153, 153);

  &:last-child {
    border-bottom: none;
  }
`;

export const PopoverContent = styled.li`
  list-style-type: none;
  list-style: none;
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid #999;

  &:last-child {
    border-bottom: none;
  }

  a {
    padding: 16px 5px;
    display: block;

    &,
    &:hover,
    &:focus {
      color: rgba(0, 0, 0, 0.65);
      text-decoration: none;
    }
  }
`;

export const DescribePriceWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
    white-space: nowrap;
  }
`;

export const DescribePricePresent = styled.span`
  a,
  a:hover,
  a:focus {
    color: rgb(139, 26, 39);
    font-weight: 600;
  }
`;

export const DescribePriceArrow = styled.span`
  margin: 0 5px;
`;

export const DescribeDiscount = styled.span`
  font-size: 10px;

  a,
  a:hover,
  a:focus {
    color: rgb(0, 0, 0, 0.65);
  }
`;
