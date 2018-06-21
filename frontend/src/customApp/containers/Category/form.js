import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        
        <RestFormInput name="lang" />
        <RestFormInput name="category_code" />
        <RestFormInput name="status" />
        <RestFormInput name="start_timestamp" />
        <RestFormInput name="end_timestamp" />
        <RestFormInput name="category_name" />
        <RestFormInput name="facet_disp_flag" />
        <RestFormInput name="memo" />
        <RestFormInput name="category_path" />
        <RestFormInput name="priority" />
        <RestFormInput name="description" />
        <RestFormInput name="attributes" />
        <RestFormInput name="branches" />
        <RestFormInput name="badges" />
        <RestFormInput name="keywords" />
        <RestFormInput name="tags" />
        <RestFormSubmit label="保存" />
      </RestForm>
    );
  }
}
