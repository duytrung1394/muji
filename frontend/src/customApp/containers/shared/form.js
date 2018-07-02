import React, {Component, Children} from 'react';
import {Prompt} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ja';
import Input, {Textarea} from '../../../components/uielements/input';
import InputNumber from '../../../components/uielements/InputNumber';
import DatePicker from '../../../components/uielements/datePicker';
import Select, {SelectOption} from '../../../components/uielements/select';
import Radio, {RadioGroup} from '../../../components/uielements/radio';
import Button from '../../../components/uielements/button';
import Form from '../../../components/uielements/form';
import shallowEqual from 'fbjs/lib/shallowEqual';
import IntlMessages from "../../../components/utility/intlMessages";

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

export default class RestForm extends Component {
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
    this.updateEntity = this.updateEntity.bind(this);
    this.entityChanged = this.entityChanged.bind(this);
    this.submit = this.submit.bind(this);
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

  submit(){
    this.props.onSubmit(this.state.entity)
  }

  render() {
    const {
      errors,
    } = this.props;
    const {
      entity,
    } = this.state;

    let errorMessages = {
    };
    if( errors ){
      Object.keys(errors).forEach( key => {
        errorMessages[key] = errors[key].join("\n")
      });
    }

    return (
      <Form>
        <Prompt
          when={ this.state.showPrompt }
          message={ this.beforeUnloadMessage }
        />
        {
          React.Children.map(this.props.children, (child)=>{
            if( typeof(child) == 'string' ){
              return child;
            }
            const props = child.props;
            const newProps = {
              errorMessage: errorMessages[props.name],
              updateEntity: this.updateEntity,
              submit: this.submit,
              entity,
              ...props,
            }
            return React.cloneElement(child, newProps);
          })
        }
      </Form>
    );
  }
}

export function RestFormInput(props){
  const {
    name,
    label,
    errorMessage, 
    entity,
  } = props;
  const validateStatus = errorMessage ? 'error' : '';
  // TODO: i18nベースのlabel自動使用
  return (
    <FormItem
      {...formItemLayout}
      label={ label ? label : name}
      validateStatus={ validateStatus }
      help={ errorMessage }
    >
      <Input
        placeholder={ name }
        value={ entity[name] }
        onChange={ event => props.updateEntity(name, event.target.value) }
      />
    </FormItem>
  );
}
export function RestFormTextarea(props){
  const {
    name,
    label,
    errorMessage,
    entity,
  } = props;
  const validateStatus = errorMessage ? 'error' : '';
  // TODO: i18nベースのlabel自動使用
  return (
    <FormItem
      {...formItemLayout}
      label={ label ? label : name}
      validateStatus={ validateStatus }
      help={ errorMessage }
    >
      <Textarea
        placeholder={ name }
        value={ entity[name] }
        onChange={ event => props.updateEntity(name, event.target.value) }
      />
    </FormItem>
  );
}
export function RestFormInputNumber(props){
  const {
    name,
    label,
    errorMessage,
    entity,
  } = props;
  const validateStatus = errorMessage ? 'error' : '';
  // TODO: i18nベースのlabel自動使用
  return (
    <FormItem
      {...formItemLayout}
      label={ label ? label : name}
      validateStatus={ validateStatus }
      help={ errorMessage }
    >
      <InputNumber
        placeholder={ name }
        value={ entity[name] }
        onChange={ value => props.updateEntity(name, value) }
      />
    </FormItem>
  );
}
export function RestFormSelect(props){
  const {
    name,
    label,
    errorMessage,
    entity,
    options,
  } = props;
  const validateStatus = errorMessage ? 'error' : '';
  // TODO: i18nベースのlabel自動使用
  return (
    <FormItem
      {...formItemLayout}
      label={ label ? label : name}
      validateStatus={ validateStatus }
      help={ errorMessage }
    >
      <Select
        defaultValue={entity[name]}
        onChange={ value => props.updateEntity(name, value) }
      >
        {options.map(o => <SelectOption value={o.value}>{o.label}</SelectOption>)}
      </Select>
    </FormItem>
  );
}
export function RestFormRadioGroup(props){
  const {
    name,
    label,
    errorMessage,
    entity,
    options,
  } = props;
  const validateStatus = errorMessage ? 'error' : '';
  // TODO: i18nベースのlabel自動使用
  return (
    <FormItem
      {...formItemLayout}
      label={ label ? label : name}
      validateStatus={ validateStatus }
      help={ errorMessage }
    >
      <RadioGroup
        value={entity[name]}
        onChange={ event => props.updateEntity(name, event.target.value) }
      >
        {options.map(o => <Radio value={o.value}>{o.label}</Radio>)}
      </RadioGroup>
    </FormItem>
  );
}
export function RestFormDatePicker(props){
  const {
    name,
    label,
    errorMessage,
    entity,
  } = props;
  const validateStatus = errorMessage ? 'error' : '';
  // TODO: i18nベースのlabel自動使用
  return (
    <FormItem
      {...formItemLayout}
      label={ label ? label : name}
      validateStatus={ validateStatus }
      help={ errorMessage }
    >
      <DatePicker
        defaultValue={ entity[name] ? moment(new Date(entity[name] * 1000)) : ''}
        onChange={ m => props.updateEntity(name, m.unix()) }
      />
    </FormItem>
  );
}
export function RestFormSubmit(props){
  // TODO: i18nベースで「保存」の自動指定
  return (
    <FormItem {...tailFormItemLayout}>
      <Button
        type="primary"
        htmlType="submit"
        onClick={() => {
          props.submit()
        }}
      >
        {(()=> {
          if(props.label){
            return props.label;
          }else{
            return (<IntlMessages id="rest.save" />);
          }
        })()}
      </Button>
    </FormItem>
  );
}
