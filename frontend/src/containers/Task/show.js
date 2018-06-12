import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {Modal, message} from 'antd';
import actions from '../../redux/task/entity/actions';
import LayoutWrapper from "../../components/utility/layoutWrapper";
import PageHeader from "../../components/utility/pageHeader";
import Box from '../../components/utility/box';
import Button from '../../components/uielements/button';
import Spin from '../../components/uielements/spin';

const confirm = Modal.confirm;

class ShowTask extends Component {

  componentDidMount() {
    this.props.destroyCleanup();
    this.props.request(this.props.match.params.id);
  }

  componentDidUpdate() {
    const {
      history,
      destroyed,
      destroyCleanup,
    } = this.props;

    if( destroyed ){
      destroyCleanup();
      message.error('削除しました');
      history.push('/dashboard/tasks');
    }
  }

  render() {
    const {
      // redux-router
      match,
      // redux store
      entity,
      fetching,
      destroyed,
      // redux action
      destroy,
      cleanup,
    } = this.props;

    const {
      id
    } = match.params;



    // TODO: fetchErrorを表示してUIからfetchしなおせるようにしたい
    return (
      <LayoutWrapper>
        <div>
          <Link to={`/dashboard/tasks`}>
            <Button>一覧に戻る</Button>
          </Link>
          <Link to={`/dashboard/tasks/${id}/edit`}>
            <Button>編集</Button>
          </Link>
          <Button
            type="danger"
            onClick={ ()=> {
              confirm({
                title: `このタスクを削除してよろしいですか？`,
                content: '削除したタスクを元に戻すことは出来ません',
                onOk() {
                  destroy(id);
                },
                onCancel() {},
              });
            } }>削除</Button>
        </div>

        <PageHeader>
          タスク詳細
        </PageHeader>

        <Box>
          <Spin spinning={fetching}>
            <div key={id}>
              <ul>
                <li>ID: {entity.id}</li>
                <li>Name: {entity.name}</li>
                <li>CreatedAt: {entity.created_at}</li>
                <li>Description: {entity.description}</li>
              </ul>
            </div>
          </Spin>

        </Box>
      </LayoutWrapper>
    );
  }
}

const {
  request,
  cleanup,
} = actions.fetch;


const mapStateToProps = (state) => {
  return state.Task.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowTask);
