import React, { Component } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";

const platformDependentSrc =
  "http://www.muji.net/mt/contact/detail_list/014341.html";

const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 10px 0 0 0;
  }
  .ant-modal-footer {
    display: none;
  }
  iframe {
    border: 0;
  }
`;

class PlatformDependentDescription extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  platformDependentLink = (
    <a onClick={this.showModal}>
      <IntlMessages id="customerAddress.createEdit.aboutPlatformDependentCharactor" />
    </a>
  );

  render() {
    return (
      <div>
        <IntlMessages
          id="customerAddress.createEdit.platformDependentDescription"
          values={{ link: this.platformDependentLink }}
        />
        <StyledModal
          visible={this.state.visible}
          width="60%"
          onCancel={this.handleCancel}
        >
          <iframe src={platformDependentSrc} width="100%" height="50%" />
        </StyledModal>
      </div>
    );
  }
}

export default PlatformDependentDescription;
