import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/task/entity/actions';
import IntlMessages from "../../../components/utility/intlMessages";

class ShowEntity extends Component {

  render() {
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="task"
        title={<IntlMessages id="task.name" />}
        pkName="id"
        baseUrl="/dashboard/tasks"
        {...this.props}
      >
        <ul>
          
          <li><IntlMessages id="task.attributes.name" />: {entity.name}</li>
          <li><IntlMessages id="task.attributes.description" />: {entity.description}</li>
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
  return state.Task.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
