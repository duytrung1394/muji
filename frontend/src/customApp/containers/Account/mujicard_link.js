import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import actions from "../../redux/account/entity/actions";

import IntlMessages from "../../../components/utility/intlMessages";
import MujicardLinkHeader from "../../components/account/mujicard_link/mujicardLinkHeader";
import MujicardLinkContent from "../../components/account/mujicard_link/mujicardLinkContent";
import MujicardLinkForm from "../../components/account/mujicard_link/mujicardLinkForm";
import MujicardLinkButtons from "../../components/account/mujicard_link/mujicardLinkButtons";

const ContentLayout = styled.div`
  max-width: 732px;
  padding: 0 16px 10px;
  margin: 0 auto;
  overflow: hidden;
  color: #585858;
`;


class MujicardLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card_number : '',
            card_date : ''
        };
    };

    onChange = (data) => {
        this.setState({
            card_number : data['card_number'],
            card_date : data['card_date']
        });
    }

    onSubmit = () => {
        console.log(1);
        this.props.postRequest("", {  });
    }


    render() {
        return (
            <ContentLayout>
                <MujicardLinkHeader />
                <MujicardLinkContent/>
                <MujicardLinkForm onChange={this.onChange} />
                <MujicardLinkButtons onSubmit={this.onSubmit}/>
            </ContentLayout>
        );
      }
  }


const mapStateToProps = state => {
    return state.Account
    .Entity.toJS();
};
  
const actionCreators = {
    postRequest: actions.create.request
};


  
  
const enhance = C => {
    const connected = connect(
      mapStateToProps,
      actionCreators
    )(C);
    const injected = injectIntl(connected, { withRef: true });
    return injected;
};
  
export default enhance(MujicardLink);
  
  