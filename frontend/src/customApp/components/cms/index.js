import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/cms/actions";

class CmsContent extends Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.contents || '' }}></div>;
  }
}

const CmdtyDetailCmsContent = connect(
  state => {
    return state.Cms.toJS();
  },
  {
    fetchRequest: actions.cmdty.detail.fetchInclude1.request
  }
)(CmsContent);

export {
  CmdtyDetailCmsContent
};
