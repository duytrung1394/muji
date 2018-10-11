import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/httpbin/actions";
import { injectIntl } from "react-intl";
import LayoutWrapper from "../../../components/utility/layoutWrapper";

class Index extends Component {
  constructor(props) {
    super(props);
  }

  // React methods
  componentDidMount() {
    this.props.fetchCleanup();
    this.props.fetchRequest();
  }

  // React.render
  render() {
    const fetching = this.props.fetching;
    const ip = this.props.ip;

    return (
      <LayoutWrapper>
        <div className="isoLayoutContent">
          {(() => {
            if (fetching) {
              return <p>ロード中</p>;
            } else {
              return <p>ロード完了</p>;
            }
          })()}
          <p>あなたのIP: {ip}</p>
        </div>
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = state => {
  return state.Httpbin.toJS();
};

const actionCreators = {
  fetchRequest: actions.ip.fetch.request,
  fetchCleanup: actions.ip.fetch.cleanup
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
