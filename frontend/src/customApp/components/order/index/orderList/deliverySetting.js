import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Modal, Radio, Select, Row, Col } from "antd";
import styled from "styled-components";
import moment from "../../../../util/moment";
import IntlMessages from "../../../../../components/utility/intlMessages";
import { OutlineButton } from "../../../shared/form/button";

const DecisionButton = styled(OutlineButton)`
  color: #7f0019;
  border-color: #7f0019;
`;

const ButtonArea = styled.div`
  text-align: right;
`;

const DeliverySettingModal = styled(Modal)`
  .ant-modal-header {
    border-bottom: none;
    padding: 16px 24px 0;
    .ant-modal-title {
      font-weight: 600;
      font-size: 15px;
    }
  }
  .ant-radio-group {
    width: 100%;
  }
  .ant-modal-body {
    max-height: 90vh;
    overflow-y: auto;
    .delivery-date {
      display: flex;
      margin-left: 24px;
      margin-bottom: 10px;
    }
    .delivery-date-label {
      font-weight: 600;
      font-size: 13px;
    }
    .ant-select {
      display: block;
      margin-left: 5px;
    }
  }
  .button-wrapper {
    margin-top: 10px;
    text-align: center;
  }
`;

const StyledRadio = styled(Radio)`
  && {
    margin-bottom: 10px;
    font-weight: 600;
  }
  & span .ant-radio-inner {
    border-color: #7f0019;
    :after {
      background-color: #7f0019;
      border-color: #7f0019;
      height: 10px;
      width: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const StyledSelect = styled(Select)`
  font-size: 12px;
  margin-bottom: 10px;
`;

const StyledDeliveryScheduledDate = styled.div`
  margin-left: 24px;
  margin-bottom: 10px;
  .scheduled-date {
    font-weight: 600;
    font-size: 13px;
  }
  .note {
    font-size: 11px;
  }
`;
const DeliveryScheduledDate = ({ scheduledDate, note }) => {
  return (
    <StyledDeliveryScheduledDate>
      <div className="scheduled-date">{scheduledDate}</div>
      <div className="note">{note}</div>
    </StyledDeliveryScheduledDate>
  );
};

const getDeliveryDateSelectOptions = (dateFormat, deliveryTimeAndDates) => {
  return deliveryTimeAndDates.map((delivery, index) => {
    return (
      <Select.Option value={delivery.deliveryDate} key={index}>
        {moment(delivery.deliveryDate).format(dateFormat)}
      </Select.Option>
    );
  });
};

const getDeliveryTimeSelectOptions = (deliveryDate, deliveryTimeAndDates) => {
  const target = deliveryTimeAndDates.filter(
    delivery => delivery.deliveryDate === deliveryDate
  );
  if (!target || target.length === 0) {
    return null;
  }
  return target[0].deliveryTimes.map((delivery, index) => {
    if (delivery.deliveryStatus) {
      return (
        <Select.Option value={delivery.timeNo} key={index}>
          {delivery.deliveryTimeName}
        </Select.Option>
      );
    }
  });
};

const normalSlowColLayout = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 12,
  xl: 12
};

class DeliverySetting extends Component {
  state = {
    visible: false,
    type: "normal",
    deliveryDate: this.props.normalDeliveryDate,
    timeNo: this.props.normalDeliveryTimeNo
  };

  setModalVisible = visible => {
    this.setState({ visible: visible });
  };

  handleDecision = () => {
    this.setModalVisible(false);
  };

  handleCancel = () => {
    this.setModalVisible(false);
  };

  handleDateChange = changedDate => {
    this.setState({ deliveryDate: changedDate });
  };

  handleTimeNoChange = changedTimeNo => {
    this.setState({ timeNo: changedTimeNo });
  };

  handleTypeChange = event => {
    this.setState({ type: event.target.value });
  };

  render() {
    const {
      intl,
      deliveryTimeAndDatesAttribute,
      deliveryTimeAndDates,
      normalDeliveryDate,
      normalDeliveryTimeNo,
      slowDeliveryDate
    } = this.props;

    if (
      !deliveryTimeAndDatesAttribute ||
      deliveryTimeAndDatesAttribute === "SELEC_DISABLE"
    ) {
      return null;
    }

    const dateFormat = intl.formatMessage({
      id: "order.procedure.deliverySetting.format.deliveryDate"
    });

    return (
      <div>
        <ButtonArea>
          <OutlineButton
            width="150px"
            onClick={() => this.setModalVisible(true)}
          >
            <IntlMessages id="order.procedure.specifyDate" />
          </OutlineButton>
        </ButtonArea>
        <DeliverySettingModal
          title={<IntlMessages id="order.procedure.deliverySetting.title" />}
          centered
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          <Radio.Group value={this.state.type} onChange={this.handleTypeChange}>
            <Row gutter={8}>
              <Col {...normalSlowColLayout}>
                <StyledRadio value="normal">
                  <IntlMessages id="order.procedure.deliverySetting.radio.normal" />
                </StyledRadio>
                <div className="delivery-date">
                  <div className="delivery-date-label">
                    <IntlMessages id="order.procedure.deliverySetting.label.deliveryDateTime" />
                  </div>
                  <div>
                    <StyledSelect
                      value={this.state.deliveryDate}
                      onChange={this.handleDateChange}
                    >
                      {getDeliveryDateSelectOptions(
                        dateFormat,
                        deliveryTimeAndDates
                      )}
                    </StyledSelect>
                    <StyledSelect
                      value={this.state.timeNo}
                      onChange={this.handleTimeNoChange}
                    >
                      {getDeliveryTimeSelectOptions(
                        this.state.deliveryDate,
                        deliveryTimeAndDates
                      )}
                    </StyledSelect>
                  </div>
                </div>
              </Col>
              <Col {...normalSlowColLayout}>
                <StyledRadio value="slow">
                  <IntlMessages id="order.procedure.deliverySetting.radio.slow" />
                </StyledRadio>
                <DeliveryScheduledDate
                  scheduledDate={
                    <IntlMessages
                      id="order.procedure.deliverySetting.deliveryScheduledDate.slow"
                      values={{
                        scheduledDate: moment(slowDeliveryDate).format(
                          dateFormat
                        )
                      }}
                    />
                  }
                  note={
                    <IntlMessages id="order.procedure.deliverySetting.note.slow" />
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <StyledRadio value="nekoposu">
                  <IntlMessages id="order.procedure.deliverySetting.radio.nekoposu" />
                </StyledRadio>
                <DeliveryScheduledDate
                  note={
                    <IntlMessages id="order.procedure.deliverySetting.note.nekoposu" />
                  }
                />
              </Col>
            </Row>
          </Radio.Group>
          <div className="button-wrapper">
            <OutlineButton color="#7f0019" onClick={this.handleDecision}>
              <IntlMessages id="order.procedure.deliverySetting.button.decision" />
            </OutlineButton>
          </div>
        </DeliverySettingModal>
      </div>
    );
  }
}

export default injectIntl(DeliverySetting, {
  withRef: true
});
