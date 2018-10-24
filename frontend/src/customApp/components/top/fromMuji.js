import IntlMessages from "../../../components/utility/intlMessages";
import {
  FromMujiSection,
  FromMujiTitle,
  StyledCard,
  StyledRow,
  NewCard,
  LoadMore,
  StyleCardMeta
} from "./fromMuji.style";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";

class FromMuji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 10
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
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
                    {index < 15 ? <NewCard>NEW</NewCard> : null}
                    <StyleCardMeta
                      title={item.title}
                      description={item.date}
                    />
                  </StyledCard>
                );
              })}
          </StyledRow>
          {this.state.visible < Object.keys(fromMujis).length && (
            <LoadMore onClick={this.loadMore}>
              <IntlMessages id="top.fromMuji.load_more" />
            </LoadMore>
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
