import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';
import IntlMessages from "../../../components/utility/intlMessages";

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        <% detailColumns.forEach((column) => {%>
        <RestFormInput name="<%= column %>" label={<IntlMessages id="<%= resourceName %>.attributes.<%= column %>" />} /><%
        }); %>
        <RestFormSubmit />
      </RestForm>
    );
  }
}
