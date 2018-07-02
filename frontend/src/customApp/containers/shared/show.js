import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Modal, message} from 'antd';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import Box from '../../../components/utility/box';
import Button from '../../../components/uielements/button';
import Spin from '../../../components/uielements/spin';
import IntlMessages from "../../../components/utility/intlMessages";

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

    const primaryKey = match.params.id;

    // TODO: fetchErrorを表示してUIからfetchしなおせるようにしたい
    return (
      <LayoutWrapper>
        <div>
          <Link to={ baseUrl }>
            <Button><IntlMessages id="rest.index" /></Button>
          </Link>
          <Link to={`${baseUrl}/${primaryKey}/edit`}>
            <Button><IntlMessages id="rest.edit" /></Button>
          </Link>
          {/* TODO: confirmのtitle,contentに IntlMessages を渡す方法がわからず。 */}
          <Button
            type="danger"
            onClick={ ()=> {
              confirm({
                title: `この${name}を削除してよろしいですか？`,
                content: `削除した${name}を元に戻すことは出来ません`,
                onOk() {
                  destroy(primaryKey);
                },
                onCancel() {},
              });
            } }><IntlMessages id="rest.delete" /></Button>
        </div>

        <PageHeader>
          <IntlMessages id={`${name}.name`} /><IntlMessages id="rest.show" />
        </PageHeader>

        <Box>
          <Spin spinning={fetching}>
            <div key={primaryKey}>
              { this.props.children }
            </div>
          </Spin>

        </Box>
      </LayoutWrapper>
    );
  }
}
