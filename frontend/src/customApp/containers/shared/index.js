import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {message, Modal } from 'antd';
import Button from '../../../components/uielements/button';
import Table from '../../../components/uielements/table';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import { withRouter } from 'react-router-dom'

const confirm = Modal.confirm;

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
    };

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
      props.fetchRequest( this.getPage(props) );
    }

    if( this.state.selectedKeys.length > 0 && props.destroyed ){
      this.setState({selectedKeys: []});
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
    return this.state.selectedKeys.length > 0
  }

  render() {
    const page = this.getPage(this.props);

    const {
      name,
      baseUrl,
      columnNames,
      linkColumn,
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
      SearchComponent,
    } = this.props;

    let columns = [];
    columnNames.forEach(name => {
      let column = {
        title: name,
        dataIndex: name,
        key: name,
      };

      if( linkColumn === name ){
        column.render = (value, record) => 
        {
          return <Link to={`${baseUrl}/${record[this.props.pkName]}`}>{value}</Link>
        }
      }

      columns.push(column);
    })

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({selectedKeys: selectedRowKeys});
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
          url = baseUrl;
        } else {
          url = `${baseUrl}/page/${page}`;
        }
        history.push(url);
      }
    };

    return (
      <LayoutWrapper>
        <PageHeader>
          {name}一覧
        </PageHeader>
        <div className='isoLayoutContent'>
          <Link to={`${baseUrl}/!new`}>
            <Button type="primary">
              新規作成
            </Button>
          </Link>
          <Button
            type="danger"
            disabled={ ! this.recordsSelected() }
            onClick={ (event)=> {
              const keys = this.state.selectedKeys;
              confirm({
                title: `選択した${this.state.selectedKeys.length}件のタスクを削除してよろしいですか？`,
                content: '削除したタスクを元に戻すことは出来ません',
                onOk() {
                  destroyRequest(keys);
                },
                onCancel() {},
              });
            } }
          >
            削除
          </Button>
          {this.state.selectedKeys.length > 0 &&
          <span>（{ this.state.selectedKeys.length }件選択中）</span>
          }
          { SearchComponent && <SearchComponent /> }
          <div key={page}>
            <Table
              rowKey={ this.props.pkName }
              dataSource={ entities }
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
