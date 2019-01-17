import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/product_detail/entity/actions";
import { injectIntl } from "react-intl";
import { Spin, Row } from "antd";
import ContentAreaLayout from "../../components/panel/contentLayout";
import DetailPicture from "../../components/productDetail/detailPicture";
import DetailInfo from "../../components/productDetail/detailInfo";
import ContentHeader from "../../components/header/contentHeader";

import { Modal } from "antd";

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.jan_code);
  }

  constructor() {
    super();
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const {
      // types
      entity,
      fetching
    } = this.props;

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <ContentHeader links={entity.links} />
          <div>
            <Row>
              <DetailPicture entity={entity} />
              <DetailInfo entity={entity} />
            </Row>
          </div>
        </Spin>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        />
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.ProductDetail.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request
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
