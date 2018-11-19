import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Spin } from "antd";
import styled from "styled-components";
import actions from "../../redux/customer_address/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import { List } from "antd";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import { Button } from "../../components/customerAddress/forms/button";
import Pagination from "../../components/customerAddress/list/pagination";
import AddressItem from "../../components/customerAddress/list/addressItem";

const BASE_URL = "/store/cust/address";

const MAX_NUMBER_OF_ADDRESS = 100;

const AddressAddButtonLayout = styled.div`
  text-align: right;
  margin-bottom: 15px;
`;

const BackLinkLayout = styled.div`
  margin: 15px 0;
`;

const ContentLayout = styled(BaseContentLayout)``;

const AddressListHeader = styled.div`
  h1 {
    border-bottom: 1px solid #e6e6e6;
    font-size: 28px;
    font-weight: bold;
  }
`;

const AddressList = styled(List)``;

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest({ page: this.getPage(this.props) });
  }

  componentDidUpdate(prevProps, prevState) {
    const props = this.props;

    if (this.getPage(prevProps) !== this.getPage(props)) {
      props.fetchRequest({ page: this.getPage(props) });
    }

    if (props.destroyed) {
      props.destroyCleanup();
      props.fetchRequest({ page: this.getPage(props) });
    }
  }

  getPage = props => {
    return parseInt(props.match.params.page, 10) || 1;
  };

  onChange = page => {
    let url;
    if (page === 1) {
      url = `${BASE_URL}/list`;
    } else {
      url = `${BASE_URL}/list/page/${page}`;
    }
    this.props.history.push(url);
  };

  render() {
    const {
      total,
      entities,
      fetching,
      destroying,
      destroyRequest
    } = this.props;

    const currentPage = this.getPage(this.props);

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching || destroying} size="large">
          <ContentLayout>
            <AddressListHeader>
              <h1>
                <IntlMessages id="customerAddress.list.title" />
              </h1>
              <p>
                <IntlMessages id="customerAddress.list.description" />
              </p>
            </AddressListHeader>
            {total < MAX_NUMBER_OF_ADDRESS ? (
              <AddressAddButtonLayout>
                <Link to={`${BASE_URL}/create`}>
                  <Button icon="add">
                    <IntlMessages id="customerAddress.list.link.add" />
                  </Button>
                </Link>
              </AddressAddButtonLayout>
            ) : null}

            <Pagination
              size="small"
              total={total}
              current={currentPage}
              changeHandler={this.onChange}
            />

            <AddressList
              className="address-list"
              itemLayout="horizontal"
              dataSource={entities}
              renderItem={(entity, index) => (
                //<List.Item>
                <AddressItem
                  entity={entity}
                  key={index}
                  destroyRequest={destroyRequest}
                />
                //</List.Item>
              )}
            />

            {/*
            {entities &&
              entities.map((entity, index) => (
                <AddressItem
                  entity={entity}
                  key={index}
                  destroyRequest={destroyRequest}
                />
            ))} */}

            <Pagination
              size="small"
              total={total}
              current={currentPage}
              changeHandler={this.onChange}
            />

            <BackLinkLayout>
              <Link to="">
                <IntlMessages id="customerAddress.list.link.backLink" />
              </Link>
            </BackLinkLayout>
          </ContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerAddress.List.toJS();
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
  const injectedWithRouter = withRouter(injected);
  return injectedWithRouter;
};

export default enhance(Index);
