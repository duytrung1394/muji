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
    const {id} =  this.props.match.params;
    if( this.props.entity.id !== parseInt(id) ){
      // 読まれてるデータがURLと一致しない時はリロードする
      this.props.fetchCleanup();
      this.props.fetchRequest(id);
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
      const id = entity.id;
      updateCleanup();
      history.push(`${baseUrl}/${id}`);
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

    const {
      id
    } = match.params;

    return (
      <LayoutWrapper>
        <PageHeader>
          {name}の編集
        </PageHeader>
        <Link to={`${baseUrl}/${entity.id}`}>
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
                  onSubmit: entity => updateRequest(id, entity),
                });
              }
            })() }
          </Spin>
        </Box>
      </LayoutWrapper>
    );
  }
}
