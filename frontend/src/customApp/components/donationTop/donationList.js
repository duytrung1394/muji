import IntlMessages from "../../../components/utility/intlMessages";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import actions from "../../redux/donation_top/entity/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import { Row, Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export const DonationListSection = styled.div`
  padding-bottom: 40px;
`;

const DonationListTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
  padding: 15px 15px 15px;
`;
const StyledRow = styled(Row)`
  &&& {
    display: flex;
  }
  a {
    width: 23%;
    margin: 5px auto;
  }
  .ant-card-body {
    padding: 15px;
  }
`;

const StyledCard = styled(Card)`
  &.ant-card {
    font-size: 100%;
    border-radius: 3px;
  }
  img {
    border-radius: 3px 3px　0　0;
  }
`;

const OrganizationDiv = styled.div`
  padding-top: 10px;
  font-size: 12px;
  color: #999;
`;

const EmeagencyCard = styled.span`
  font-size: 13px;
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: bold;
  background-color: black;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
`;

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
                  <StyledRow justify="start" align="top">
                    {donation.items.map((item, index) => {
                      return (
                        <Link to={"/store/cmdty/donation/" + item.donationCode}>
                          <StyledCard
                            hoverable
                            cover={<img alt="example" src={item.img} />}
                            key={index}
                          >
                            {item.title === "北海道地震被災者支援" ? (
                              <EmeagencyCard>
                                <IntlMessages id="donationTop.attributes.emergency_donation" />
                              </EmeagencyCard>
                            ) : null}
                            <Meta
                              title={item.title}
                              description={item.description}
                            />
                            <OrganizationDiv>
                              {" "}
                              {item.organization}
                            </OrganizationDiv>
                          </StyledCard>
                        </Link>
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
