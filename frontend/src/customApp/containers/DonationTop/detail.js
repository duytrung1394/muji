import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/donation_top/entity/actions";
import { injectIntl } from "react-intl";
import ContentAreaLayout from "../../components/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import Form from "../../components/donationTop/forms/form";

class Edit extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.donationCode);
  }

  //　TODO: 更新時処理
  // componentDidUpdate(prevProps, prevState, prevContext) {
  //   const { updated, updateCleanup, history } = this.props;
  //   if (updated) {
  //     updateCleanup();
  //     history.push("/store/cmdty/donation/confirm");
  //   }
  // }

  render() {
    const donationCode = this.props.match.params.donationCode;
    const { fetched, updated, entity } = this.props;
    return (
      <ContentAreaLayout>
        {fetched &&
          !updated && (
            <Form
              actionType="edit"
              entity={entity}
              requestHandler={entity =>
                this.props.updateRequest(donationCode, entity)
              }
            />
          )}
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.DonationTop.Entity.toJS();
};

const { request, cleanup } = actions.update;

const actionCreators = {
  fetchRequest: actions.fetch.request,
  fetchCleanup: actions.fetch.cleanup,
  updateRequest: actions.update.request,
  updateCleanup: actions.update.cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Edit);
