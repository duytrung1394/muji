import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import { Spin } from "antd";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import ReviewItem from "../../components/customerReview/list/reviewItem";

const ContentLayout = styled(BaseContentLayout)``;

const ListHeader = styled.div`
  h1 {
    border-bottom: 1px solid #e6e6e6;
    font-size: 28px;
    font-weight: bold;
  }
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  componentDidMount() {
    this.fetchRequest(this.props);
  }

  fetchRequest = props => {
    props.fetchRequest({
      offset: 0,
      length: 5,
      filters: JSON.stringify(props.filters || [])
    });
  };

  render() {
    const { total, entities, fetching, destroying, history } = this.props;

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
          url = "/customerReviews";
        } else {
          url = `/customerReviews/page/${page}`;
        }
        history.push(url);
      }
    };

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching || destroying} size="large">
          <ContentLayout>
            <ListHeader>
              <h1>
                <IntlMessages id="customerReview.list.title" />
              </h1>
              <div>
                <ul>
                  <li>
                    <IntlMessages id="customerReview.name" />
                    <span>6</span>
                  </li>
                </ul>
                <div>投稿日の新しい順</div>
              </div>
            </ListHeader>
            {entities &&
              entities.map((entity, index) => (
                <ReviewItem entity={entity} key={index} />
              ))}
          </ContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.List.toJS();
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
