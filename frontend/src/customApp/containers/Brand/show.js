import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/brand/entity/actions';

class ShowEntity extends Component {

  render() {
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="brand"
        pkName="brand_code"
        baseUrl="/dashboard/brands"
        {...this.props}
      >
        <ul>
          
          <li>Lang: {entity.lang}</li>
          <li>BrandCode: {entity.brand_code}</li>
          <li>BrandName: {entity.brand_name}</li>
          <li>Status: {entity.status}</li>
          <li>ParentBrandCode: {entity.parent_brand_code}</li>
          <li>ImageUrl: {entity.image_url}</li>
          <li>DetailUrl: {entity.detail_url}</li>
          <li>ZipCode: {entity.zip_code}</li>
          <li>Country: {entity.country}</li>
          <li>State: {entity.state}</li>
          <li>City: {entity.city}</li>
          <li>Address1: {entity.address1}</li>
          <li>Address2: {entity.address2}</li>
          <li>Tel: {entity.tel}</li>
          <li>Deleted: {entity.deleted}</li>
          <li>Description: {entity.description}</li>
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
  return state.Brand.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
