import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

import actions from "./customApp/redux/task/list/actions";

class Home extends Component {
  componentWillMount() {
    this.props.fetchRequest({page: 0, filters: '[]'});
  }

  render() {
    return (
      <div>
        <p>Task fetch result from Redux:</p>
        <p>
          { JSON.stringify(this.props.entities) }
        </p>
        <p>
          fetching: { this.props.fetching ? 'T' : 'F' }
        </p>
        <p>
          error: { this.props.fetchError ? 'T' : 'F' }
        </p>
        <p>
          total: { this.props.total }
        </p>

        <p>This Page is Home Page!!</p>
        <p><Link to={'/about'}>about</Link></p>
        <p><Link to={'/fruits'}>fruits</Link></p>
        <p><Link to={'/httpbin'}>httpbin</Link></p>
      </div>
    );
  }
}

// export default Home;

const mapStateToProps = state => {
  return state.Task.List.toJS();
};

const { fetch } = actions;

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchRequest: fetch.request,
    }
  )(Home)
);

