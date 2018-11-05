import React, { Component } from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper } from "google-maps-react";
import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../panel/contentPanel";
import SelectPrefecture from "../form/selectPrefecture";
import { isServer, BrowserOnly } from "../../../helpers/ssr";

const mapStyle = { position: "relative", width: "100%", height: "250px" };

const ContentMapPanel = styled(ContentPanel)`
  .ant-card-extra {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .top-shop-title {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

const shopUrl = "https://www.muji.com/jp/shop";

const Aux = props => props.children;

export class Shop extends Component {
  handleChange = prefecture => {
    window.location.href = `${shopUrl}/search?q=${prefecture}`;
  };

  render() {
    return (
      <ContentMapPanel
        extra={
          <Aux>
            <span className="top-shop-title">
              <IntlMessages id="top.shop.title" />
            </span>
            <SelectPrefecture onChange={this.handleChange} />
            <a href={`${shopUrl}/?area=main`}>
              <IntlMessages id="top.shop.link_title" />
            </a>
          </Aux>
        }
      >
        <Map google={this.props.google} containerStyle={mapStyle} />
      </ContentMapPanel>
    );
  }
}

const SafeGoogleApiWrapper = (options) => {
  if( isServer() ){
    return (component) => component;
  }else{
    return (component) => (GoogleApiWrapper(options)(component) );
  }
}

export default SafeGoogleApiWrapper({
  // apiKey: "xxxxxx"
})(Shop);
