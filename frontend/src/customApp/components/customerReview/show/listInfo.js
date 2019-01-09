import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "antd";

const Info = styled.div`
  margin: 30px 0;
  font-size: 12px;
`;

const ReviewItemInfo = styled.div`
  position: relative;
`;

const ItemImg = styled.img`
  margin-right: 10px;
`;

const ReviewTitle = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const RigthArrow = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 35%;
  right: 0;
`;

const LinkStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  zIndex: "10"
};

const ListInfo = ({ entity }) => {
  return (
    <Info>
      <ReviewItemInfo>
        <Link to={``} style={LinkStyle} />
        <ItemImg
          src={`https://img.muji.net/img/item/${entity.jancode}_180.jpg`}
          alt="itemImage"
          width="60"
          height="60"
        />
        <ReviewTitle>{entity.product}</ReviewTitle>
        <RigthArrow type="right" />
      </ReviewItemInfo>
    </Info>
  );
};

export default ListInfo;
