import React, {Component} from 'react';
import {Prompt} from 'react-router-dom';
import Input from '../../../components/uielements/input';
import Button from '../../../components/uielements/button';
import Form from '../../../components/uielements/form';
import shallowEqual from 'fbjs/lib/shallowEqual';

const FormItem = Form.Item;

// new/editの共通コンポーネント

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

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

export default class EntityForm extends Component {
  beforeUnloadMessage = "このまま移動すると変更が保存されません。\nよろしいですか？";

  static defaultProps = {
    entity: {}
  }

  constructor(props) {
    super(props);
    this.state = {
      entity: this.props.entity,
      showPrompt: false,
    };

    this.beforeunload = this.beforeunload.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.beforeunload);
  }

  componentWillUnmount(){
    window.removeEventListener('beforeunload', this.beforeunload);
  }

  beforeunload(ev){
    if( this.state.showPrompt ){
      ev.returnValue = this.beforeUnloadMessage;
    }
  }

  // this.props.entityと引数entityを比較する。ただし空文字と未定義は共通のものとして扱う。
  entityChanged(entity){
    for(const key in entity){
      const propVal = this.props.entity[key];
      // [1] propsの値が空(null/undefined/"")でない場合 → 新しい値と不一致なら変更あり
      // [2] propsの値が空(null/undefined/"")の場合 → 新しい値が空でないなら変更あり
      if(
        ( propVal && propVal !== entity[key]) ||
        (!propVal && entity[key])
      ){
        return true;
      }
    }
    return false;
  }

  updateEntity(field, value){
    const entity = {
      ...this.state.entity,
      [field]: value,
    };
    const showPrompt = this.entityChanged(entity);
    this.setState({entity, showPrompt})
  }

  render() {
    const {
      errors,
    } = this.props;
    const {
      entity,
    } = this.state;

    let validateStatuses = {
    };
    let errorMessages = {
    };
    if( errors && errors['name'] ){
      validateStatuses.name = "error";
      errorMessages.name = errors['name'].join("\n")
    }
    if( errors && errors['description'] ){
      validateStatuses.description = "error";
      errorMessages.description = errors['description'].join("\n")
    }
    return (
      <Form>
        <Prompt
          when={ this.state.showPrompt }
          message={ this.beforeUnloadMessage }
        />
        <FormItem
          {...formItemLayout}
          label="名前"
          validateStatus={ validateStatuses.name }
          help={ errorMessages.name }
        >
          <Input
            placeholder="名前"
            value={ entity.name }
            onChange={ event => this.updateEntity('name', event.target.value) }
          />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="説明"
          validateStatus={ validateStatuses.description }
          help={ errorMessages.description }
        >
          <Input
            placeholder={'説明'}
            value={ entity.description }
            onChange={event => this.updateEntity('description', event.target.value) }/>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              this.props.onSubmit(this.state.entity)
            }}
          >
            保存
          </Button>
        </FormItem>
      </Form>
    );
  }
}
