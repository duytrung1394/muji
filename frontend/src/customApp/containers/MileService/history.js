import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/mile_service/entity/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import HistoryHeader from "../../components/mileService/mileServiceHeader";
import HistoryInfoList from "../../components/mileService/mileServiceList";
import HistoryInfoSummary from "../../components/mileService/mileServiceSummary";

const ContentLayout = styled.div`
    max-width: 732px;
    padding: 0 16px 10px;
    margin: 0 auto;
    overflow: hidden;
    color: #585858;
`
const ParagraphAbout = styled.p`
    margin: 0;
    padding: 0;
    margin-top: 30px;
    padding: 0 16px;
    font-size: 13px;
`
class History extends Component {
    componentDidMount() {
        let entity = this.props.fetchRequest('account-info')
        console.log(entity)
    }

    render() {
        const { entity, mile_history, old_mile } = this.props;
        console.log(this.props);
        return (
            <ContentLayout>
                <div className="p-mileservice-history__content">
                    <main role="main">
                        <HistoryHeader />
                        <HistoryInfoSummary entity={entity} />
                        <HistoryInfoList mile_history={mile_history} />
                        <ParagraphAbout><a style={{ color: '#60b3fa' }} href="#">MUJIマイルサービスについて</a></ParagraphAbout>
                    </main>
                </div>
            </ContentLayout>
        );
    }
}

const mapStateToProps = state => {
    return state.MileService.Entity.toJS();
};

const actionCreators = {
    fetchRequest: actions.fetch.request
};

const enhance = (C) => {
    const connected = connect(mapStateToProps, actionCreators)(C);
    const injected = injectIntl(connected, { withRef: true })
    return injected
}

export default enhance(History);
