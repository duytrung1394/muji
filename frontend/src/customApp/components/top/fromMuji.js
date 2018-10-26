import IntlMessages from "../../../components/utility/intlMessages";
import {
  FromMujiSection,
  FromMujiTitle,
  StyledRow,
  StyledCard,
  StyleCardMeta,
  NewCard,
  CenterAlign
} from "./fromMuji.style";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import LargeButton from "../form/largeButton";

class FromMuji extends Component {
  seeMore = () => {
    this.props.getFromMujisRequest({
      offset: this.props.fromMujis.length,
      length: 10
    });
  };

  render() {
    const { fromMujis } = this.props;
    if (fromMujis) {
      return (
        <FromMujiSection>
          <FromMujiTitle>from MUJI</FromMujiTitle>
          <StyledRow type="flex" justify="start" align="top">
            {fromMujis &&
              fromMujis.map((item, index) => {
                return (
                  <StyledCard
                    hoverable
                    cover={<img alt="example" src={item.img_src} />}
                    key={index}
                  >
                    {item.is_new === true ? <NewCard>NEW</NewCard> : null}
                    <StyleCardMeta title={item.title} description={item.date} />
                  </StyledCard>
                );
              })}
          </StyledRow>
          <CenterAlign>
            <LargeButton onClick={this.seeMore}>
              <IntlMessages id="top.fromMuji.button.seeMore" />
            </LargeButton>
          </CenterAlign>
        </FromMujiSection>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return state.Top.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(FromMuji);
