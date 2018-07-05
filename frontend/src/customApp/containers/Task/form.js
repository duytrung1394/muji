import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        
        <RestFormInput name="name" id="task.attributes.name" />
        <RestFormInput name="description" id="task.attributes.description" />
        <RestFormSubmit />
      </RestForm>
    );
  }
}
