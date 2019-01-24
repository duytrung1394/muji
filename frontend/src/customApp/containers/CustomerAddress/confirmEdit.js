import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";
import styled from "styled-components";
import actions from "../../redux/customer_address/entity/actions";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import Confirm from "../../components/customerAddress/forms/confirm";
import AddressHeader from "../../components/customerAddress/addressHeader";

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`;

class ConfirmEdit extends Component {
  componentDidMount() {
    if (Object.keys(this.props.entity).length === 0) {
      // reload
      this.props.history.push(
        `/store/cust/address/edit/${this.props.match.params.addressBookNo}`
      );
    }
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.props.updated) {
      this.props.cleanup();
      this.props.history.push("/store/cust/address/complete", {
        actionType: "edit"
      });
    }
  }

  render() {
    const { entity, request, updating } = this.props;
    return (
      <ContentAreaLayout>
        <Spin spinning={updating} size="large">
          <BaseContentLayout>
            <Wrapper>
              <AddressHeader>
                <h1>
                  <IntlMessages id="customerAddress.confirm.title" />
                </h1>
                <p>
                  <IntlMessages id="customerAddress.confirm.description1" />
                  <br />
                  <IntlMessages id="customerAddress.confirm.description2" />
                </p>
              </AddressHeader>
              <Confirm
                actionType="edit"
                entity={entity}
                returnPathname={`/store/cust/address/edit/${
                  entity.addressBookNo
                }`}
                requestHandler={() => {
                  request(entity.addressBookNo, entity);
                }}
              />
            </Wrapper>
          </BaseContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerAddress.Entity.toJS();
};

const { request, cleanup } = actions.update;

const actionCreators = {
  request,
  cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(ConfirmEdit);
