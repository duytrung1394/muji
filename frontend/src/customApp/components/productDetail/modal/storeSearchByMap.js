import React, { Component, Fragment } from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import { OutlineButton } from "../../shared/form/button";

const StoreSearchByMapDiv = styled.div`
  padding: 8px 0;
`;

const StoreSearchByMapTitle = styled.h1`
  font-size: 15px;
  padding: 8px 0;
  border-bottom: 1px solid rgb(153, 153, 153);
`;

const StoreMap = styled.iframe`
  display: block;
  width: 100%;
  height: 40%;
  margin-top: 16px;
`;

const SearchForCurrentLocation = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const MapOfNearbyStores = () => {
  return (
    <Fragment>
      <StoreSearchByMapTitle>
        <IntlMessages id="productDetail.storeSearchByMap" />
      </StoreSearchByMapTitle>
      <div>
        <StoreMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.955164058517!2d139.71298971528645!3d35.72732118546502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d67fef93b19%3A0x34a9ab381e75f38a!2z54Sh5Y2w6Imv5ZOB5rGg6KKL6KW_5q2m!5e0!3m2!1sja!2sjp!4v1545196925068" />
      </div>
    </Fragment>
  );
};

const SearchNearbyStoresButton = ({ onClick }) => {
  return (
    <SearchForCurrentLocation>
      <OutlineButton onClick={() => onClick()}>
        <IntlMessages id="productDetail.searchFromCurrentLocation" />
      </OutlineButton>
    </SearchForCurrentLocation>
  );
};

class StoreSearchByMap extends Component {
  constructor() {
    super();
    this.state = {
      showMap: false
    };
  }

  changeShowMap = () => {
    this.setState({ showMap: true });
  };

  render() {
    return (
      <StoreSearchByMapDiv>
        {this.state.showMap ? (
          <MapOfNearbyStores />
        ) : (
          <SearchNearbyStoresButton onClick={this.changeShowMap} />
        )}
      </StoreSearchByMapDiv>
    );
  }
}

export default StoreSearchByMap;
