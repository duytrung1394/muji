import IntlMessages from "../../../components/utility/intlMessages";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import { Row, Card } from "antd";

const { Meta } = Card;

export const DonationListSection = styled.div`
  padding-bottom: 40px;
`;

const DonationListTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const StyledRow = styled(Row)`
  padding: 0px;
  margin: 0px;
`;

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 15px;
  }
`;
const StyleCardMeta = styled(Meta)``;

class DonationList extends Component {
  render() {
    const { donations } = this.props;
    if (donations) {
      return (
        <DonationListSection>
          {donations &&
            donations.map((donation, index) => {
              return (
                <Fragment>
                  <DonationListTitle>{donation.title}</DonationListTitle>
                  <StyledRow type="flex" justify="start" align="top">
                    {donation.items.map((item, index) => {
                      return (
                        <StyledCard
                          hoverable
                          cover={<img alt="example" src={item.img_src} />}
                          key={index}
                        >
                          <StyleCardMeta
                            title={item.title}
                            description={item.date}
                          />
                        </StyledCard>
                      );
                    })}
                  </StyledRow>
                </Fragment>
              );
            })}
        </DonationListSection>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return state.Top.Entity.toJS();
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

export default enhance(DonationList);
