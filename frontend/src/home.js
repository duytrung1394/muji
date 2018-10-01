import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

// import actions from "./customApp/redux/task/list/actions";

class Home extends Component {
  componentDidMount() {
    // this.props.fetchRequest({page: 0, filters: '[]'});
  }

  render() {
    return (
      <div>
        <p>Task fetch result from Redux:</p>
        <p>
          { JSON.stringify(this.props.entities) }
        </p>
        <p>
          fetching: { this.props.fetching ? 'true' : 'false' }
        </p>
        <p>
          total: { this.props.total }
        </p>

        This Page is Home Page!! <br />
        <Link to={'/about'}>about</Link>
      </div>
    );
  }
}

export default Home;

// const mapStateToProps = state => {
//   return state.Task.List.toJS();
// };

// const { fetch } = actions;

// export default withRouter(
//   connect(
//     mapStateToProps,
//     {
//       fetchRequest: fetch.request,
//     }
//   )(Home)
// );

