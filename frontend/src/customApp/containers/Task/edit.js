import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from "react-redux";
import TaskForm from './form';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import Box from '../../../components/utility/box';
import Spin from '../../../components/uielements/spin';
import Button from '../../../components/uielements/button';
import actions from "../../redux/task/entity/actions";
import {message} from "antd/lib/index";

class EditTask extends Component {
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
      updated,
      entity,
      updateCleanup,
      history
    } = this.props;

    if(updated){
      message.success('タスクを更新しました');
      const id = entity.id;
      updateCleanup();
      history.push(`/dashboard/tasks/${id}`);
    }
  }

  render() {
    const {
      // react-router
      match,
      // types
      fetching,
      fetched,
      entity,
      updating,
      updated,
      updateError,
      updateErrors,
      // methods
      updateRequest,
    } = this.props;

    const {
      id
    } = match.params;

    return (
      <LayoutWrapper>
        <PageHeader>
          タスクの編集
        </PageHeader>
        <Link to={`/dashboard/tasks/${entity.id}`}>
          <Button>
            タスク詳細にもどる
          </Button>
        </Link>
        <Box>
          <Spin spinning={fetching || updating}>
            { (() => {
              if( fetched && !updated ){
                return (
                  <TaskForm
                    entity={ entity }
                    onSubmit={ entity => updateRequest(id, entity) }
                    errors={ updateErrors.task }
                  />
                );
              }
            })() }
          </Spin>
        </Box>
      </LayoutWrapper>
    );
  }
}

const {
  fetch,
  update,
} = actions;

const mapStateToProps = (state) => state.Task.Entity.toJS();

export default withRouter(connect(mapStateToProps, {
  fetchRequest: fetch.request,
  fetchCleanup: fetch.cleanup,
  updateRequest: update.request,
  updateCleanup: update.cleanup,
})(EditTask));
