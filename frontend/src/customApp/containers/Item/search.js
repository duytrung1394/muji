import React, {Component} from 'react';
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

export default class extends Component {
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
      {label: '未選択', value: ''},
      {label: '公開', value: 'PUBLISHED'},
      {label: '非公開', value: 'UNPUBLISHED'},
    ];
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>絞り込み</Button>
        <Modal
          title="絞り込み検索"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="この条件で絞り込む"
          cancelText="取り消し"
        >
          <Form>
            <FormItem {...formItemLayout} label='品目名'>
              <Input
                placeholder='item_name'
                value={ this.state.filters.item_name }
                onChange={ event => this.handleChange('item_name', event.target.value) }
              />
            </FormItem>
            <FormItem {...formItemLayout} label='JANコード'>
              <Input
                placeholder='item_code'
                value={ this.state.filters.item_code }
                onChange={ event => this.handleChange('item_code', event.target.value) }
              />
            </FormItem>
            <FormItem {...formItemLayout} label='公開状態'>
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
