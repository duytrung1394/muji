import React, { Component, Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Icon } from "antd";

const SeeMore = styled.a`
  font-size: 12px;
`;

const DetailText = styled.p`
  font-size: 13px;
  margin: 0;
  line-height: 1.5;
  height: 3em;
  overflow: hidden;
  transition-duration: 1;
`;

const SeeMoreButton = styled.p`
  margin-top: 8px;
`;

const SeeMoreIcon = styled(Icon)`
  margin-left: 8px;
`;

const seeMoreBaseStyle = {
  fontSize: "13px",
  margin: "0",
  lineHeight: "1.5",
  height: "3em",
  overflow: "hidden",
  transitionDuration: "0.5"
};

const seeMoreActiveStyle = {
  ...seeMoreBaseStyle,
  height: "auto"
};

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSeeMore: false
    };
  }

  changeSeeMore = () => {
    this.setState({ isSeeMore: !this.state.isSeeMore });
  };

  render() {
    const { description } = this.props;
    const delimiter = "。";
    const descriptionLines = description
      .split(delimiter)
      .filter(line => line != "");
    return (
      <Fragment>
        <DetailText
          style={this.state.isSeeMore ? seeMoreActiveStyle : seeMoreBaseStyle}
        >
          {descriptionLines.map((line, index) => {
            return (
              <span key={index}>
                {line}
                {descriptionLines.length - 1 > index && delimiter}
                <br />
              </span>
            );
          })}
        </DetailText>
        <SeeMore onClick={this.changeSeeMore}>
          {this.state.isSeeMore ? (
            <SeeMoreButton>
              <IntlMessages id="productDetail.closeSeeMore" />
              <SeeMoreIcon type="up" />
            </SeeMoreButton>
          ) : (
            <SeeMoreButton>
              <IntlMessages id="productDetail.seeMore" />
              <SeeMoreIcon type="down" />
            </SeeMoreButton>
          )}
        </SeeMore>
      </Fragment>
    );
  }
}

export default Info;
