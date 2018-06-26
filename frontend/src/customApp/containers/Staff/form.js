import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        
        <RestFormInput name="staff_code" />
        <RestFormInput name="name" />
        <RestFormInput name="store_code" />
        <RestFormInput name="deleted" />
        <RestFormInput name="attributes" />
        <RestFormInput name="access_policy" />
        <RestFormSubmit label="保存" />
      </RestForm>
    );
  }
}
