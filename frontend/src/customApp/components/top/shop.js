import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { Select } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";
import Panel from "../panel/panelWithTitle";
import SelectPrefecture from "../form/selectPrefecture";

const containerStyle = {position: 'relative', width: '100%', height:'250px'}

const Option = Select.Option;

export class Shop extends Component {
  handleChange = prefecture => {
    this.props.history.push({
      pathname: "/store",
      search: `?prefecture=${prefecture}`
    });
  }
  
  render() {
    return (
      <Panel
        title={<IntlMessages id="top.shop.title"/>}
        link_title={<IntlMessages id="top.shop.link_title"/>}
        link_path="/store"
        tool={<SelectPrefecture onChange={this.handleChange}/>}
        >
          <Map
            google={this.props.google}
            containerStyle={containerStyle}
            />
      </Panel>
    );
  }
}

export default withRouter(GoogleApiWrapper({
  // apiKey: "xxxxxx"
})(Shop));





