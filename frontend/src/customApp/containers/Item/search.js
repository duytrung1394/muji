import React, {Component} from 'react';
import { Modal } from 'antd';
import Button from '../../../components/uielements/button';
import RestForm, {RestFormInput, RestFormDatePicker, RestFormSelect} from '../shared/form';


export default class extends Component {
  state = {
    loading: false,
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 2000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const categoryOptions = [
      {label: 'カテゴリ1', value: 'category1'},
      {label: 'カテゴリ2', value: 'category2'},
      {label: 'カテゴリ3', value: 'category3'},
    ];
    const statusOptions = [
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
          confirmLoading={this.state.loading}
          onCancel={this.handleCancel}
          okText="この条件で絞り込む"
          cancelText="取り消し"
        >
          <RestForm>
            <RestFormInput label="品目名" name="item_name"/>
            <RestFormInput label="JANコード" name="item_code" />
            <RestFormSelect label="カテゴリ" name="category" options={categoryOptions} />
            <RestFormSelect label="公開状態" name="status" options={statusOptions} />
            <RestFormDatePicker label="有効期限(FROM)" name="start_timestamp" />
            <RestFormDatePicker label="有効期限(TO)" name="end_timestamp" />
          </RestForm>

        </Modal>
      </div>
    );
  }
}
