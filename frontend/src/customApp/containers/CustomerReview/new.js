import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/entity/actions";
import { injectIntl } from "react-intl";
import ContentAreaLayout from "../../components/panel/contentLayout";
import styled from "styled-components";
import ReviewTop from "./reviewTop";
import PostReview from "./postReview";
import ConfirmReview from "./confirmReview";

const ReviewLayout = styled(ContentAreaLayout)`
  width: 880px;
`;

const ReviewFormWrapper = styled.div`
  padding: 30px 50px;
  text-align: center;
  margin-bottom: 70px;
  background-color: #f7f7f7;
`;

class New extends Component {
  componentDidMount() {
    this.props.fetchRequest("");
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const { created, createCleanup, history } = this.props;
    if (created) {
      this.props.createCleanup();
      history.push("/store/cust/review/item/{}/confirm");
    }
  }

  render() {
    const { initialized, entity, changeView, isChangeView } = this.props;

    console.log(this.props.isChangeView);

    return (
      <ReviewLayout>
        <ReviewTop entity={entity} />
        <ReviewFormWrapper>
          {isChangeView ? (
            <ConfirmReview />
          ) : (
            <PostReview changeView={changeView} />
          )}
        </ReviewFormWrapper>
      </ReviewLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
  changeView: actions.change
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(New);
