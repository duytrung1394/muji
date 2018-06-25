import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/addon_service/entity/actions';

class ShowEntity extends Component {

  render() {
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="addon_service"
        pkName="addon_service_code"
        baseUrl="/dashboard/addon-services"
        {...this.props}
      >
        <ul>
          
          <li>Lang: {entity.lang}</li>
          <li>AddonServiceCode: {entity.addon_service_code}</li>
          <li>AddonServiceName: {entity.addon_service_name}</li>
          <li>PriceExVat: {entity.price_ex_vat}</li>
          <li>PriceInVat: {entity.price_in_vat}</li>
          <li>Description: {entity.description}</li>
          <li>CurrencyCode: {entity.currency_code}</li>
          <li>Memo: {entity.memo}</li>
          <li>Deleted: {entity.deleted}</li>
          <li>Attributes: {entity.attributes}</li>
          <li>AccessPolicy: {entity.access_policy}</li>
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
  return state.AddonService.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
