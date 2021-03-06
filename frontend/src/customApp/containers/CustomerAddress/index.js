import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Spin } from "antd";
import styled from "styled-components";
import actions from "../../redux/customer_address/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import { List, Popover } from "antd";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import { Button } from "../../components/customerAddress/forms/button";
import Pagination from "../../components/customerAddress/list/pagination";
import AddressItem from "../../components/customerAddress/list/addressItem";
import AddressHeader from "../../components/customerAddress/addressHeader";

const BASE_URL = "/store/cust/address";

const MAX_NUMBER_OF_ADDRESS = 100;

const AddressAddButtonLayout = styled.div`
  text-align: right;
`;

const BackLinkLayout = styled.div`
  margin: 15px 0;
  a{
    color:#333333;
    text-decoration:underline;
    :hover{
      color:#7f0019;
    }
`;

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Div = styled.div`
  font-size: 11px;
  p {
    margin: 0;
  }
  a {
    color: #333333;
    text-decoration: underline;
    :hover {
      color: #7f0019;
    }
  }
`;

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
          <BaseContentLayout>
            <Wrapper>
              <AddressHeader>
                <h1>
                  <IntlMessages id="customerAddress.list.title" />
                </h1>
                <p>
                  <IntlMessages id="customerAddress.list.description" />
                </p>
                <Div>
                  <p>
                    <IntlMessages id="customerAddress.list.note" />
                  </p>
                  <p>
                    <Popover trigger="click">
                      <a>
                        <img
                          src="https://www.muji.net/cache/img/common/imageview.gif"
                          alt=""
                        />
                        <IntlMessages id="customerAddress.list.cancel" />
                      </a>
                    </Popover>
                  </p>
                </Div>
              </AddressHeader>
              {total < MAX_NUMBER_OF_ADDRESS ? (
                <AddressAddButtonLayout>
                  <Link to={`${BASE_URL}/create`}>
                    <Button type="primary" size="small" icon="plus">
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
              <List
                className="address-list"
                itemLayout="horizontal"
                dataSource={entities}
                renderItem={(entity, index) => (
                  <AddressItem
                    entity={entity}
                    key={index}
                    destroyRequest={destroyRequest}
                  />
                )}
              />
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
            </Wrapper>
          </BaseContentLayout>
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
