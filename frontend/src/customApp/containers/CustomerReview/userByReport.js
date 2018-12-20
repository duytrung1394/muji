import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/list/actions";
import { injectIntl } from "react-intl";

class UserByReport extends Component {
  componentDidMount() {
    this.props.getReport(
      `${this.props.match.params.item_code}/${
        this.props.match.params.comment_code
      }`
    );
  }

  render() {
    console.log(this.props.entities);
    return (
      <div>
        <a>{this.props.entities.product}</a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.List.toJS();
};

const actionCreators = {
  getReport: actions.getReport.request
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(UserByReport);
