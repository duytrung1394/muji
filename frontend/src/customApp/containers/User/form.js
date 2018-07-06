import React, { Component } from "react";
import RestForm, { RestFormInput, RestFormSubmit } from "../shared/form";

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        <RestFormInput name="id" id="user.attributes.id" />
        <RestFormInput name="username" id="user.attributes.username" />
        <RestFormInput name="last_name" id="user.attributes.last_name" />
        <RestFormInput name="first_name" id="user.attributes.first_name" />
        <RestFormSubmit />
      </RestForm>
    );
  }
}
