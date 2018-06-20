import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from "react-redux";
import {message} from 'antd';
import TaskForm from './form';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import Box from '../../../components/utility/box';
import Spin from '../../../components/uielements/spin';
import Button from '../../../components/uielements/button';
import actions from "../../redux/task/entity/actions";

class NewTask extends Component {

  componentDidUpdate(prevProps, prevState, prevContext){
    const {
      name,
      baseUrl,
      created,
      entity,
      cleanup,
      history
    } = this.props;

    if(created){
      message.success(`${name}を新規作成しました`);
      const id = entity.id;
      cleanup();
      history.push(`${baseUrl}/${id}`);
    }

  }

  render() {
    const {
      name,
      baseUrl,
      formComponent,
      // redux store
      creating,
      created,
      createError,
      createErrors,
      // redux action
      request,
    } = this.props;

    // TODO: if createError で簡単なエラー表示？いらない？
    return (
      <LayoutWrapper>
        <PageHeader>
          {name}の新規作成
        </PageHeader>
        <Box>
          <Link to={baseUrl}>
            <Button>
              一覧にもどる
            </Button>
          </Link>
          <Spin spinning={creating}>
            { (() => {
              if( !created ){
                return React.createElement(formComponent,{
                  onSubmit: entity => request(entity),
                  errors: createErrors.task,
                });
              }
            })() }
          </Spin>
        </Box>
      </LayoutWrapper>
    );
  }
}

const {
  request,
  cleanup
} = actions.create;

const mapStateToProps = (state) => {
  return state.Task.Entity.toJS();
};

export default withRouter(connect(mapStateToProps, {
  request,
  cleanup,
})(NewTask));
