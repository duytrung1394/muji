import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        <% detailColumns.forEach((column) => {%>
        <RestFormInput name="<%= column %>" id="<%= resourceName %>.attributes.<%= column %>" /><%
        }); %>
        <RestFormSubmit />
      </RestForm>
    );
  }
}