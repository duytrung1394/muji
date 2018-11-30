import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import actions from "../../redux/customer_address/entity/actions";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import Confirm from "../../components/customerAddress/forms/confirm";

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`;

class ConfirmNew extends Component {
  componentDidMount() {
    if (Object.keys(this.props.entity).length === 0) {
      // reload
      this.props.history.push("/store/cust/address/create");
    }
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.props.created) {
      this.props.cleanup();
      this.props.history.push("/store/cust/address/complete", {
        actionType: "new"
      });
    }
  }

  render() {
    const { entity } = this.props;
    return (
      <ContentAreaLayout>
        <BaseContentLayout>
          <Wrapper>
            <h1>
              <IntlMessages id="customerAddress.confirm.title" />
            </h1>
            <p>
              <IntlMessages id="customerAddress.confirm.description1" />
              <br />
              <IntlMessages id="customerAddress.confirm.description2" />
            </p>
            <Confirm
              actionType="new"
              entity={this.props.entity}
              returnPathname="/store/cust/address/create"
              requestHandler={() => {
                this.props.request(this.props.entity);
              }}
            />
          </Wrapper>
        </BaseContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerAddress.Entity.toJS();
};

const { request, cleanup } = actions.create;

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

export default enhance(ConfirmNew);
