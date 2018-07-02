import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/<%= resource_name %>/entity/actions';
import IntlMessages from "../../../components/utility/intlMessages";

class ShowEntity extends Component {

  render() {
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="<%= resourceName %>"
        title={<IntlMessages id="<%= resourceName %>.name" />}
        pkName="<%= pkName %>"
        baseUrl="/dashboard/<%= urlbase %>"
        {...this.props}
      >
        <ul>
          <% detailColumns.forEach((column) => { %>
          <li><IntlMessages id="<%= resourceName %>.attributes.<%= column %>" />: {entity.<%= column %>}</li><%
          }); %>
        </ul>
      </RestShow>
    );
  }
}

const {
  request,
  cleanup,
} = actions.fetch;


const mapStateToProps = (state) => {
  return state.<%= ResourceName %>.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
