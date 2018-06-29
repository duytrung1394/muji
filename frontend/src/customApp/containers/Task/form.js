import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';
import IntlMessages from "../../../components/utility/intlMessages";

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        
        <RestFormInput name="name" label={<IntlMessages id="task.name" />} />
        <RestFormInput name="description " label={<IntlMessages id="task.description" />} />
        <RestFormSubmit label={<IntlMessages id="task.form.save" />} />
      </RestForm>
    );
  }
}
