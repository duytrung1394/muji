import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        <RestFormInput name="name" />
        <RestFormInput name="description" />
        <RestFormSubmit label="保存" />
      </RestForm>
    );
  }
}
