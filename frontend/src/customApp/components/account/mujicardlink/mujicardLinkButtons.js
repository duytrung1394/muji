import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { OutlineButton } from "../../shared/form/button";

const ButtonArea = styled.div`
  margin-top: 20px;
  text-align: center;
`;

class MujicardLinkButtons extends Component {
  render() {
    return (
      <div>
        <ButtonArea>
          <OutlineButton
            color="#7f0119"
            reverse="true"
            onClick={this.props.onSubmit}
          >
            <IntlMessages id="account.page.mujicardLink.register" />
          </OutlineButton>
        </ButtonArea>

        <ButtonArea>
          <OutlineButton>
          　<IntlMessages id="account.page.mujicardLink.return" />
          </OutlineButton>
        </ButtonArea>
      </div>
    );
  }
}

export default MujicardLinkButtons;
