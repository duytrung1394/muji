import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {message, Modal } from 'antd';
import actions from '../../redux/user/list/actions';
import Button from '../../../components/uielements/button';
import Table from '../../../components/uielements/table';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import { withRouter } from 'react-router-dom'

const confirm = Modal.confirm;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIds: [],
    };

    // TODO: 何かもっと賢い手あった気がする
    this.recordsSelected = this.recordsSelected.bind(this);
  }

  getPage(props) {
    return parseInt(props.match.params.page) || 1;
  }

  componentDidMount() {
    this.props.fetchRequest( this.getPage(this.props) );
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    const props = this.props;
    if( this.getPage(prevProps) !== this.getPage(props) ){
      props.load( this.getPage(props) );
    }

    if( this.state.selectedIds.length > 0 && props.destroyed ){
      this.setState({selectedIds: []});
    }

    const {
      destroyCleanup,
      fetchRequest,
      destroyed,
    } = props;

    if( destroyed ){
      destroyCleanup();
      fetchRequest();
      message.error('削除しました');
    }
  }

  recordsSelected(){
    return this.state.selectedIds.length > 0
  }

  render() {
    const page = this.getPage(this.props);

    const {
      // types
      total,
      entities,
      fetching,
      destroying,
      // methods
      fetchRequest,
      destroyRequest,
      // react-router
      history,
    } = this.props;

    const dataSource = entities.map(entity => {
      return {
        id: entity.id,
        name: entity.username,
      };
    });

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      }, {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (name, record) => <Link to={`/dashboard/users/${record.id}`}>{name}</Link>,
      }
    ];

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({selectedIds: selectedRowKeys});
      },
      getCheckboxProps: record => ({
        name: record.name,
      }),
    };

    const pagination = {
      defaultCurrent: page,
      total: total,
      showTotal: (total, range) => {
        return `${total} 件中 ${range[0]} - ${range[1]}件目 を表示`
      },
      onChange: page => {
        let url;
        if ( page === 1 ) {
          url = '/dashboard/users/';
        } else {
          url = `/dashboard/users/page/${page}`;
        }
        history.push(url);
      }
    };

    return (
      <LayoutWrapper>
        <PageHeader>
          タスク一覧
        </PageHeader>
        <div className='isoLayoutContent'>
          <p>
            <Link to={`/dashboard/users/new`}>
              <Button type="primary">
                新規作成
              </Button>
            </Link>
          </p>
          <p>
            <Button
              type="danger"
              disabled={ ! this.recordsSelected() }
              onClick={ (event)=> {
                const ids = this.state.selectedIds;
                confirm({
                  title: `選択した${this.state.selectedIds.length}件のタスクを削除してよろしいですか？`,
                  content: '削除したタスクを元に戻すことは出来ません',
                  onOk() {
                    destroyRequest(ids);
                  },
                  onCancel() {},
                });
              } }
            >
              削除
            </Button>
            {this.state.selectedIds.length > 0 &&
            <span>（{ this.state.selectedIds.length }件選択中）</span>
            }
          </p>

          <div key={page}>
            <Table
              rowKey='id'
              dataSource={ dataSource }
              columns={ columns }
              rowSelection={ rowSelection }
              loading={ fetching || destroying }
              pagination={ pagination }
            />
          </div>
        </div>
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return state.User.List.toJS();
};


const {
  fetch,
  destroy
} = actions;

export default withRouter(connect(mapStateToProps, {
  fetchRequest: fetch.request,
  destroyRequest: destroy.request,
  destroyCleanup: destroy.cleanup,
})(Index));
