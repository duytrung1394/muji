import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {message, Modal } from 'antd';
import Button from '../../../components/uielements/button';
import Table from '../../../components/uielements/table';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import IntlMessages from "../../../components/utility/intlMessages";

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
    this.fetchRequest(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.doSearch) {
      if (this.getPage(nextProps) > 1) {
        this.props.history.push(this.props.baseUrl);
      } else {
        this.fetchRequest(nextProps);
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    const props = this.props;
    if( this.getPage(prevProps) !== this.getPage(props) ){
      this.fetchRequest(this.props);
    }

    if( this.state.selectedKeys.length > 0 && props.destroyed ){
      this.setState({selectedKeys: []});
    }

    const {
      destroyCleanup,
      destroyed,
    } = props;

  if( destroyed ){
      destroyCleanup();
      this.fetchRequest(this.props);
      message.error('削除しました');
    }
  }
  
  recordsSelected(){
    return this.state.selectedKeys.length > 0
  }

  fetchRequest = (props) => {
    props.fetchRequest({
      page    : this.getPage(props),
      filters : JSON.stringify(props.filters || [])
    });
  }

  render() {
    const page = this.getPage(this.props);

    const {
      name,
      title,
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
    columnNames.forEach(colName => {
      let column = {
        title: <IntlMessages id={`${name}.attributes.${colName}`} />,
        dataIndex: colName,
        key: colName,
      };

      if( linkColumn === colName ){
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
          {title ? title : name}<IntlMessages id="rest.index" />
        </PageHeader>
        <div className='isoLayoutContent'>
          <Link to={`${baseUrl}/!new`}>
            <Button type="primary">
              <IntlMessages id="rest.new" />
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
            <IntlMessages id="rest.delete" />
          </Button>
          {this.state.selectedKeys.length > 0 &&
          <span>（{ this.state.selectedKeys.length }件選択中）</span>
          }
          { SearchComponent &&
          <SearchComponent
            filters={this.props.filters}
            setFilters={this.props.setFilters}
          />
          }
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
