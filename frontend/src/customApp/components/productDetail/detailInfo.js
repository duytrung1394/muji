import React from "react";
import styled from "styled-components";
import { Col } from "antd";
import Detail from "./detail";
import Color from "./color";
import Size from "./size";
import Quantity from "./quantity";
import Buttons from "./buttons";
import IntlMessages from "../../../components/utility/intlMessages";

const DetailName = styled.p`
  color: #999;
  font-size: 17px;
  word-spacing: 0.45px;
  margin: 0;
`;

const ItemName = styled.h2`
  font-size: 19px;
`;

const SeeMore = styled.a`
  font-size: 12px;
`;

const DetailText = styled.p`
  font-size: 13px;
`;

const Info = ({ info }) => {
  return (
    <div>
      <DetailText>
        {info.messages.map((message, index) => {
          return (
            <span key={index}>
              {message}
              <br />
            </span>
          );
        })}
      </DetailText>
      <SeeMore>
        <IntlMessages id="rest.seeMore" />
      </SeeMore>
    </div>
  );
};

const DetailInfo = ({ entity }) => {
  if (
    !entity.material ||
    !entity.read_more_info ||
    !entity.color_list ||
    !entity.size_list
  ) {
    return null;
  }

  return (
    <Col span={11} offset={1}>
      <DetailName>{entity.material}</DetailName>
      <ItemName>{entity.title}</ItemName>
      <Info info={entity.read_more_info} />
      <Detail />
      <Color select={entity.color_list_select} colorList={entity.color_list} />
      <Size select={entity.size_list_select} sizeList={entity.size_list} />
      <Quantity />
      <Buttons />
    </Col>
  );
};

export default DetailInfo;
