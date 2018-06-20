import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Modal, message} from 'antd';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import Box from '../../../components/utility/box';
import Button from '../../../components/uielements/button';
import Spin from '../../../components/uielements/spin';

const confirm = Modal.confirm;

export default class ShowEntity extends Component {

  componentDidMount() {
    this.props.destroyCleanup();
    this.props.request(this.props.match.params.id);
  }

  componentDidUpdate() {
    const {
      baseUrl,
      history,
      destroyed,
      destroyCleanup,
    } = this.props;

    if( destroyed ){
      destroyCleanup();
      message.error('削除しました');
      history.push(baseUrl);
    }
  }

  render() {
    const {
      // RestShow
      name,
      baseUrl,
      // redux-router
      match,
      // redux store
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
          <Link to={ baseUrl }>
            <Button>一覧に戻る</Button>
          </Link>
          <Link to={`${baseUrl}/${id}/edit`}>
            <Button>編集</Button>
          </Link>
          <Button
            type="danger"
            onClick={ ()=> {
              confirm({
                title: `この${name}を削除してよろしいですか？`,
                content: `削除した${name}を元に戻すことは出来ません`,
                onOk() {
                  destroy(id);
                },
                onCancel() {},
              });
            } }>削除</Button>
        </div>

        <PageHeader>
          {name}詳細
        </PageHeader>

        <Box>
          <Spin spinning={fetching}>
            <div key={id}>
              { this.props.children }
            </div>
          </Spin>

        </Box>
      </LayoutWrapper>
    );
  }
}
