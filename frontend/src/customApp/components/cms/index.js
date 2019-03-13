import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/cms/actions";

class CmsContent extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.productCode);
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.contents || '' }} />;
  }
}

const CmsContentCmdtyDetailInclude1 = connect(
  state => state.Cms.Cmdty.Detail.Include1.toJS(),
  {
    fetchRequest: actions.cmdty.detail.include1.fetch.request
  }
)(CmsContent);

export {
  CmsContentCmdtyDetailInclude1
};
