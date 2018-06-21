import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import Box from '../../../components/utility/box';
import Spin from '../../../components/uielements/spin';
import Button from '../../../components/uielements/button';
import {message} from "antd/lib/index";

export default class RestEdit extends Component {
  componentDidMount(){
    // showから来たときはデータが既にある。 そうじゃない時はないのでロードが必要。
    const primaryKey = this.props.match.params.id;
    if( this.props.entity[this.props.pkName] !== parseInt(primaryKey) ){
      // 読まれてるデータがURLと一致しない時はリロードする
      this.props.fetchCleanup();
      this.props.fetchRequest(primaryKey);
    }
  }

  componentDidUpdate(prevProps, prevState, prevContext){
    const {
      name,
      baseUrl,
      updated,
      entity,
      updateCleanup,
      history
    } = this.props;

    if(updated){
      message.success(`${name}を更新しました`);
      const primaryKey = entity[this.props.pkName];
      updateCleanup();
      history.push(`${baseUrl}/${primaryKey}`);
    }
  }

  render() {
    const {
      name,
      baseUrl,
      formComponent,
      // react-router
      match,
      // types
      fetching,
      fetched,
      entity,
      updating,
      updated,
      errors,
      // methods
      updateRequest,
    } = this.props;

    const primaryKey = match.params.id;

    return (
      <LayoutWrapper>
        <PageHeader>
          {name}の編集
        </PageHeader>
        <Link to={`${baseUrl}/${entity[this.props.pkName]}`}>
          <Button>
            {name}詳細にもどる
          </Button>
        </Link>
        <Box>
          <Spin spinning={fetching || updating}>
            { (() => {
              if( fetched && !updated ){
                return React.createElement(formComponent,{
                  entity,
                  errors,
                  onSubmit: entity => updateRequest(primaryKey, entity),
                });
              }
            })() }
          </Spin>
        </Box>
      </LayoutWrapper>
    );
  }
}
