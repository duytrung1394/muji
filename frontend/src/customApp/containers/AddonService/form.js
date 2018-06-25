import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        
        <RestFormInput name="lang" />
        <RestFormInput name="addon_service_code" />
        <RestFormInput name="addon_service_name" />
        <RestFormInput name="price_ex_vat" />
        <RestFormInput name="price_in_vat" />
        <RestFormInput name="description" />
        <RestFormInput name="currency_code" />
        <RestFormInput name="memo" />
        <RestFormInput name="deleted" />
        <RestFormInput name="attributes" />
        <RestFormInput name="access_policy" />
        <RestFormSubmit label="保存" />
      </RestForm>
    );
  }
}
