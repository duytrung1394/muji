import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/account/list/actions";
import styled from "styled-components";
import { Spin } from "antd";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import RegistrationButton from "../../components/account/memberguide/registrationButtons";
import MemberGuide from "../../components/account/memberguide/memberGuide";

const AreaLayout = styled(ContentAreaLayout)`
  max-width: 732px;
`;

const LoadingSpin = styled.div`
  text-align: center;
  padding: 30px 50px;
`;

const MemberGuideHeadTitle = styled.h1`
  color: #000;
  font-size: 19px;
  letter-spacing: 0.25px;
  margin-top: 30px;
`;

const MemberGuideHeadDescription = styled.p`
  color: #585858;
  font-size: 13px;
  letter-spacing: 0.3px;
  line-height: 19px;
  margin: 20px 0 0;
`;

const MemberGuideTitle = () => {
  return (
    <MemberGuideHeadTitle>
      <IntlMessages id="account.memberGuideHeadTitle" />
    </MemberGuideHeadTitle>
  );
};

const MemberGuideDescription = () => {
  return (
    <MemberGuideHeadDescription>
      <IntlMessages id="account.memberGuideHeadText" />
    </MemberGuideHeadDescription>
  );
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  componentDidMount() {
    this.props.fetchRequest("");
  }

  render() {
    const { entities } = this.props;

    if (entities.length <= 0) {
      return (
        <LoadingSpin>
          <Spin size="large" />
        </LoadingSpin>
      );
    }

    return (
      <AreaLayout>
        <BaseContentLayout>
          <MemberGuideTitle />
          <MemberGuideDescription />
          <RegistrationButton />
          <MemberGuide entities={entities} />
          <RegistrationButton />
        </BaseContentLayout>
      </AreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Account.List.toJS();
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
