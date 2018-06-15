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

    const properties      = [
      'username',
      'last_name',
      'first_name',
      'password',
    ];
    let validateStatuses  = {};
    let errorMessages     = {};
    let labels            = {
      'username'    : 'ユーザ名',
      'last_name'   : '性',
      'first_name'  : '名',
      'password'    : 'パスワード',
    };
    let placeholders      = {
      'username'    : 'ユーザ名を入力してください',
      'last_name'   : '性を入力してください',
      'first_name'  : '名を入力してください',
      'password'    : 'パスワードを入力してください',
    };

    properties.forEach(property => {
      if( errors && errors[property] ){
        validateStatuses[property]  = "error";
        errorMessages[property]     = errors[property].join("\n")
      }
    });

    return (
      <Form>
        <Prompt
          when={ this.state.showPrompt }
          message={ this.beforeUnloadMessage }
        />
        {properties.map(property => {
          return (
            <FormItem
              {...formItemLayout}
              label={labels[property]}
              validateStatus={ validateStatuses[property] }
              help={ errorMessages[property] }
            >
              <Input
                placeholder={placeholders[property]}
                value={ entity[property] }
                onChange={ event => this.updateEntity(property, event.target.value) }
              />
            </FormItem>
          );
        })}
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
