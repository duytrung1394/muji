import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/entity/actions";
import { injectIntl } from "react-intl";
import ContentAreaLayout from "../../components/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";

class New extends Component {
  componentDidMount() {
    this.props.initCleanup();
    this.props.initRequest();
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const { created, createCleanup, history } = this.props;
    if (created) {
      this.props.createCleanup();
      history.push("/store/cust/review/item/{}/confirm");
    }
  }

  render() {
    const { initialized } = this.props;
    return (
      <ContentAreaLayout>
        <h1>レビューを投稿する</h1>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.Entity.toJS();
};

const { init, create } = actions;

const actionCreators = {
  initRequest: init.request,
  initCleanup: init.cleanup,
  createRequest: create.request,
  createCleanup: create.cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(New);
