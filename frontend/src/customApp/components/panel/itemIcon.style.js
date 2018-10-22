import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkIcon = styled(Link)`
  color: #333;
  span {
    padding: 0px 0px 0px 10px;
    vertical-align: middle;
    width: calc(100% - 60px);
    font-size: 13px;
    display: inline-block;
    word-wrap:break-word;
  }
`;

export const IconImg = styled.img`
  height : 40px;
  width : 40px;
  margin : 10px;
`;