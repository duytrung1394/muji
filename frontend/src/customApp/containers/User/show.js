import React, { Component } from "react";
import { connect } from "react-redux";
import RestShow from "../shared/show";
import actions from "../../redux/user/entity/actions";
import IntlMessages from "../../../components/utility/intlMessages";

class ShowEntity extends Component {
  render() {
    const { entity } = this.props;

    return (
      <RestShow
        name="user"
        pkName="id"
        baseUrl="/dashboard/users"
        {...this.props}
      >
        <ul>
          <li>
            <IntlMessages id="user.attributes.id" />: {entity.id}
          </li>
          <li>
            <IntlMessages id="user.attributes.username" />: {entity.username}
          </li>
          <li>
            <IntlMessages id="user.attributes.last_name" />: {entity.last_name}
          </li>
          <li>
            <IntlMessages id="user.attributes.first_name" />:{" "}
            {entity.first_name}
          </li>
        </ul>
      </RestShow>
    );
  }
}

const { request, cleanup } = actions.fetch;

const mapStateToProps = state => {
  return state.User.Entity.toJS();
};

export default connect(
  mapStateToProps,
  {
    request,
    cleanup,
    destroy: actions.destroy.request,
    destroyCleanup: actions.destroy.cleanup
  }
)(ShowEntity);
