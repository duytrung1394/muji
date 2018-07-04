import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Modal, message} from 'antd';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import Box from '../../../components/utility/box';
import Button from '../../../components/uielements/button';
import Spin from '../../../components/uielements/spin';
import IntlMessages from "../../../components/utility/intlMessages";
import Txt from "./txt";

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
      message.error(<Txt><IntlMessages id="rest.deleted.message"/></Txt>);
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

    const deleteMessageTitle = (
      <Txt>
        <IntlMessages
          id="rest.show.delete.message.title"
          values={{
            name: <IntlMessages id={`${name}.name`} />
          }}
          />
      </Txt>
    );
    const deleteMessageContent = (
      <Txt>
        <IntlMessages
          id="rest.show.delete.message.content"
          values={{
            name: <IntlMessages id={`${name}.name`} />
          }}
          />
      </Txt>
    );

    // TODO: fetchErrorを表示してUIからfetchしなおせるようにしたい
    return (
      <LayoutWrapper>
        <div>
          <Link to={ baseUrl }>
            <Button><IntlMessages id="rest.index" values={{name: ''}}/></Button>
          </Link>
          <Link to={`${baseUrl}/${primaryKey}/edit`}>
            <Button><IntlMessages id="rest.edit"  values={{name: ''}}/></Button>
          </Link>
          <Button
            type="danger"
            onClick={ ()=> {
              confirm({
                title: deleteMessageTitle,
                content: deleteMessageContent,
                onOk() {
                  destroy(primaryKey);
                },
                onCancel() {},
              });
            } }><IntlMessages id="rest.delete"  values={{name: ''}}/></Button>
        </div>

        <PageHeader>
          <IntlMessages id="rest.show" values={{name: <IntlMessages id={`${name}.name`}/>}}/>
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
