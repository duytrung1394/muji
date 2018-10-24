import IntlMessages from "../../../components/utility/intlMessages";
import {
  FromMujiSection,
  FromMujiTitle,
  StyledCard,
  StyledRow,
  NewCard,
  CenterAlign,
  StyleCardMeta
} from "./fromMuji.style";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import LargeButton from "../form/largeButton";

class FromMuji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 10
    };
    this.seeMore = this.seeMore.bind(this);
  }

  seeMore() {
    this.setState(prev => {
      return { visible: prev.visible + 10 };
    });
  }

  render() {
  const { fromMujis } = this.props;
    if (fromMujis) {
      return (
        <FromMujiSection>
          <FromMujiTitle>from MUJI</FromMujiTitle>
          <StyledRow type="flex" justify="center" align="top">
            {fromMujis &&
              fromMujis.slice(0, this.state.visible).map((item, index) => {
                return (
                  <StyledCard
                    hoverable
                    cover={<img alt="example" src={item.img_src} />}
                    key={index}
                  >
                    {item.is_new === "true" ? <NewCard>NEW</NewCard> : null}
                    <StyleCardMeta title={item.title} description={item.date} />
                  </StyledCard>
                );
              })}
          </StyledRow>
          {this.state.visible < Object.keys(fromMujis).length && (
            <CenterAlign>
              <LargeButton onClick={this.seeMore} className="TouchUp">
                <IntlMessages id="top.fromMuji.button.seeMore" />
              </LargeButton>
            </CenterAlign>
          )}
        </FromMujiSection>
      );
    } else {
      return <div />;
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
