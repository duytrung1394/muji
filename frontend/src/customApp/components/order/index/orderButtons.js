import React from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import { OutlineButton } from "../../shared/form/button";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

const OrderButtons = ({ submit, backPath }) => {
  const { title, handleSubmit } = submit;
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Col>
        <OutlineButton>
          <Link to={backPath}>
            <IntlMessages id="order.procedure.backPage" />
          </Link>
        </OutlineButton>
      </Col>
      <Col>
        <OutlineButton onClick={handleSubmit} color={"#7f0019"} reverse={1}>
          {title}
        </OutlineButton>
      </Col>
    </Row>
  );
};

export default OrderButtons;
