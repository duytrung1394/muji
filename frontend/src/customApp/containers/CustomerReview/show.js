import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/entity/actions";
import { injectIntl } from "react-intl";

class Show extends Component {
  componentDidMount() {
    this.props.request(this.props.match.params.customer_review_code);
  }

  render() {
    const { entity } = this.props;

    return (
      <div>
        <p>{entity.name}</p>
        <p>{entity.description}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.Entity.toJS();
};

const { request, cleanup } = actions.fetch;

const actionCreators = {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Show);
