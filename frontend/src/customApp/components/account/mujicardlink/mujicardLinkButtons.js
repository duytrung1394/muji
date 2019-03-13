import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { OutlineButton } from "../../shared/form/button";

const ButtonArea = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const WhiteButton = styled(OutlineButton)`
  color: black !important;
`;

class MujicardLinkButtons extends Component {
  render() {
    return (
      <ButtonArea>
        <OutlineButton
          color="#7f0119"
          reverse="true"
          onClick={this.props.onSubmit}
        >
          <IntlMessages id="account.page.mujicardLink.register" />
        </OutlineButton>
        <br />
        <br />

        <WhiteButton color="white" reverse="true">
          <IntlMessages id="account.page.mujicardLink.return" />
        </WhiteButton>
      </ButtonArea>
    );
  }
}

export default MujicardLinkButtons;
