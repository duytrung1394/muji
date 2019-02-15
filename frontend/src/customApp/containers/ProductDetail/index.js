import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/product_detail/entity/actions";
import { injectIntl } from "react-intl";
import { Spin, Row, Col, Modal } from "antd";
import ContentAreaLayout from "../../components/shared/panel/contentLayout";
import DetailPicture from "../../components/productDetail/detailPicture";
import Form from "../../components/productDetail/form";
import ContentHeader from "../../components/shared/header/contentHeader";
import StockStatus from "../../components/productDetail/stockStatus";
import styled from "styled-components";

const PictureCol = styled(Col)`
  max-height: 700px;
  position: relative;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      favFlg: true
    };
  }

  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.jan_code);
  }

  componentWillReceiveProps(props) {
    this.setState({
      favFlg: props.entity.fav_flg
    });
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

  handleChangeFavFlg = () => {
    this.setState({
      favFlg: !this.state.favFlg
    });
  };

  render() {
    const {
      // types
      entity,
      fetching
    } = this.props;

    console.log(entity);

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <ContentHeader links={entity.links} />
          <Row>
            <PictureCol span={12}>
              <DetailPicture
                images={entity.images}
                favFlg={this.state.favFlg}
                handleChangeFavFlg={this.handleChangeFavFlg}
              />
            </PictureCol>
            <Col span={11} offset={1}>
              <Form entity={entity} />
              <StockStatus entity={entity} />
            </Col>
          </Row>
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
