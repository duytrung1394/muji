import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/<%= resource_name %>/entity/actions';

class ShowTask extends Component {

  render() {
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="task"
        baseUrl="/dashboard/<%= urlbase %>"
        {...this.props}
      >
        <ul>
          <li>ID: {entity.id}</li>
          <li>Name: {entity.name}</li>
          <li>CreatedAt: {entity.created_at}</li>
          <li>Description: {entity.description}</li>
        </ul>
      </RestShow>
    );
  }
}

const {
  request,
  cleanup,
} = actions.fetch;


const mapStateToProps = (state) => {
  return state.<%= ResourceName %>.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowTask);
