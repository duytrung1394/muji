import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/<%= resource_name %>/entity/actions";
import { injectIntl } from "react-intl";

class Show extends Component {
  componentDidMount() {
    this.props.request(this.props.match.params.<%= pkName %>);
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
  return state.<%= ResourceName %>.Entity.toJS();
};

const { request, cleanup } = actions.fetch;

const actionCreators = {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup
};

const enhance = (C) => {
  const connected = connect(mapStateToProps, actionCreators)(C);
  const injected = injectIntl(connected, {withRef: true})
  return injected
}

export default enhance(Show);
