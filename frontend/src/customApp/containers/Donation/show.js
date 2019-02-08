import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import actions from "../../redux/donation/entity/actions";
import { injectIntl } from "react-intl";
import ContentHeader from "../../components/shared/header/contentHeader";
import ContentAreaLayout from "../../components/shared/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import Form from "../../components/donation/show/form";
import Guide from "../../components/donation/show/guide";
import Others from "../../components/donation/show/others";
import Summary from "../../components/donation/show/summary";
import Includes from "../../components/donation/show/includes";

class Show extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.donation_code);
  }

  transitToPayment = (donationCode, numberOfUnits) => {
    this.props.history.push(
      `/store/cart/donation/payment/${donationCode}/${numberOfUnits}`
    );
  };

  render() {
    const donationCode = this.props.match.params.donation_code;
    const { fetched, updated, entity, links } = this.props;
    return (
      <ContentAreaLayout>
        {fetched &&
          !updated && (
            <Fragment>
              <ContentHeader links={links} />
              <Form
                actionType="edit"
                entity={entity}
                requestHandler={numberOfUnits =>
                  this.transitToPayment(donationCode, numberOfUnits)
                }
              />
              <Summary
                total={entity.total}
                total_people={entity.total_people}
              />
              <Includes
                organization={entity.organization}
                organizations={entity.organizations}
                activities={entity.activities}
                messages={entity.messages}
              />
              <Others others={entity.other_donations} />
              <Guide />
            </Fragment>
          )}
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Donation.Entity.toJS();
};

const { request, cleanup } = actions.update;

const actionCreators = {
  fetchRequest: actions.fetch.request,
  fetchCleanup: actions.fetch.cleanup,
  updateRequest: actions.update.request,
  updateCleanup: actions.update.cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Show);
