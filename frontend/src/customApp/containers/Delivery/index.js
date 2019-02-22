import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/delivery/list/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import Header from "../../components/delivery/header";
import AddressItem from "../../components/delivery/addressItem";
import Button from "../../components/delivery/button";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 700px;
`;

const ButtonArea = styled.div`
  margin: 30px auto;
  text-align: center;
`;

const AddButton = styled(Button)`
  width: 298px;
  height: 38px;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };

  }

  // React methods
  componentDidMount() {
    this.props.fetchRequest("");
  }

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

    if(entities.length <= 0) {
      return null;
    }
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Header />
          <AddressItem addressItem={entities.addresses} />
          <ButtonArea>
            <AddButton>
              <IntlMessages id="delivery.list.add" />
            </AddButton>
          </ButtonArea>
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Delivery.List.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
  destroyRequest: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup
};

const enhance = (C) => {
  const connected = connect(mapStateToProps, actionCreators)(C);
  const injected = injectIntl(connected, {withRef: true})
  return injected
}

export default enhance(Index);
