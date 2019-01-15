import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/order/list/actions";
import { injectIntl } from "react-intl";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import Table from "../../../components/uielements/table";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  // React methods
  componentDidMount() {
    this.fetchRequest(this.props);
  }

  fetchRequest = props => {
    // ページングもケースバイケースなのでコンポーネント毎に実装する
    props.fetchRequest({
      page: 1,
      filters: JSON.stringify(props.filters || [])
    });
  };

  // React.render
  render() {
    const {
      // types
      total,
      entities,
      fetching,
      destroying,
      // react-router
      history
    } = this.props;

    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      }
    ];

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({ selectedKeys: selectedRowKeys });
      },
      getCheckboxProps: record => ({
        name: record.name
      })
    };

    const pagination = {
      defaultCurrent: 1,
      total: total,
      onChange: page => {
        let url;
        if (page === 1) {
          url = "/orders";
        } else {
          url = `/orders/page/${page}`;
        }
        history.push(url);
      }
    };

    return (
      <LayoutWrapper>
        <div className="isoLayoutContent">
          <Table
            rowKey="id"
            dataSource={entities}
            columns={columns}
            rowSelection={rowSelection}
            loading={fetching || destroying}
            pagination={pagination}
          />
        </div>
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = state => {
  return state.Order.List.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
  destroyRequest: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Index);
