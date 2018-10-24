import styled from "styled-components";
import { Link } from "react-router-dom";

const iconImageSize = 40;
const iconImageMargin = 10;

export const LinkIcon = styled(Link)`
  color: #333;
  span {
    padding: 0px 0px 0px 10px;
    vertical-align: middle;
    width: calc(100% - ${ iconImageSize + iconImageMargin * 2 }px);
    font-size: 13px;
    display: inline-block;
    word-wrap:break-word;
  }
`;

export const IconImg = styled.img`
  height : ${ iconImageSize}px;
  width : ${ iconImageSize}px;
  margin : ${ iconImageMargin}px;
`;