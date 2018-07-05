import React, {Component} from 'react';
import {injectIntl} from 'react-intl';
import { Modal } from 'antd';
import Button from '../../../components/uielements/button';
import RestForm, {RestFormInput, RestFormDatePicker, RestFormSelect} from '../shared/form';
import Input, {Textarea} from '../../../components/uielements/input';
import Select, {SelectOption} from '../../../components/uielements/select';
import Form from '../../../components/uielements/form';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const defaultValues = {
  item_name : '',
  item_code : '',
  status    : '',
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      filters: this.props.filters,
    };
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      filters: nextProps.filters
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({ visible: false });
    this.props.setFilters(this.state.filters);

  };
  handleCancel = () => {
    this.setState({ visible: false });
    this.props.setFilters([]);
  };

  handleChange = (field, value) => {

    let filters = { ...this.state.filters };

    if (value === defaultValues[field]) {

      delete filters[field];
    } else {

      filters[field] = value;
    }

    this.setState({filters});
  }

  render() {
    const statusOptions = [
      {label: this.props.intl.formatMessage({id:'item.form.option.empty'}), value: ''},
      {label: this.props.intl.formatMessage({id:'item.form.status.option.publish'}), value: 'PUBLISHED'},
      {label: this.props.intl.formatMessage({id:'item.form.status.option.unpublish'}), value: 'UNPUBLISHED'},
    ];
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>{this.props.intl.formatMessage({id:'item.search.show'})}</Button>
        <Modal
          title={this.props.intl.formatMessage({id:'item.search.title'})}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText={this.props.intl.formatMessage({id:'item.search.ok.text'})}
          cancelText={this.props.intl.formatMessage({id:'item.search.cancel.text'})}
        >
          <Form>
            <FormItem {...formItemLayout} label={this.props.intl.formatMessage({id:'item.attributes.item_name'})}>
              <Input
                placeholder='item_name'
                value={ this.state.filters.item_name }
                onChange={ event => this.handleChange('item_name', event.target.value) }
              />
            </FormItem>
            <FormItem {...formItemLayout} label={this.props.intl.formatMessage({id:'item.attributes.item_code'})}>
              <Input
                placeholder='item_code'
                value={ this.state.filters.item_code }
                onChange={ event => this.handleChange('item_code', event.target.value) }
              />
            </FormItem>
            <FormItem {...formItemLayout} label={this.props.intl.formatMessage({id:'item.attributes.status'})}>
              <Select
                defaultValue={ this.state.filters.status || '' }
                onChange={ value => this.handleChange('status', value) }
              >
                {statusOptions.map(o => <SelectOption value={o.value}>{o.label}</SelectOption>)}
              </Select>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default injectIntl(Search, {
  withRef: true,
});
