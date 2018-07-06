import React, { Component } from "react";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import { connect } from "react-redux";
import RestShow from "../shared/show";
import actions from "../../redux/item/entity/actions";

import Box from "../../../components/utility/box";
import BoxTitle from "../../../components/utility/boxTitle";

import styled from "styled-components";

const Label = styled.span`
  display: inline-block;
  margin-top: 5px;
  width: 200px;
`;
const Value = styled.span`
  display: inline-block;
`;

class ShowEntity extends Component {
  render() {
    const { entity } = this.props;

    return (
      <RestShow
        name="item"
        pkName="item_code"
        baseUrl="/dashboard/items"
        {...this.props}
      >
        <div>
          <BoxTitle title={<IntlMessages id="item.show.item.title" />} />
          <Box>
            <ul>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.item_code" />:
                </Label>
                <Value>{entity.item_code}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.item_code_alt" />:
                </Label>
                <Value>{entity.item_code_alt}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.status" />:
                </Label>
                <Value>{entity.status}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.start_timestamp" />:
                </Label>
                <Value>{entity.start_timestamp}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.end_timestamp" />:
                </Label>
                <Value>{entity.end_timestamp}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.item_name" />:
                </Label>
                <Value>{entity.item_name}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.memo" />:
                </Label>
                <Value>{entity.memo}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.item_label" />:
                </Label>
                <Value>{entity.item_label}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.description" />:
                </Label>
                <Value>{entity.description}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.reservation_flag" />:
                </Label>
                <Value>{entity.reservation_flag}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.store_receive_flag" />:
                </Label>
                <Value>{entity.store_receive_flag}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.brand_code" />:
                </Label>
                <Value>{entity.brand_code}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.priority" />:
                </Label>
                <Value>{entity.priority}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.promotion_status" />:
                </Label>
                <Value>{entity.promotion_status}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.spec_info" />:
                </Label>
                <Value>{entity.spec_info}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.size_info" />:
                </Label>
                <Value>{entity.size_info}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.link_urls" />:
                </Label>
                <Value>{entity.link_urls}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.attributes" />:
                </Label>
                <Value>{entity.attributes}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.keywords" />:
                </Label>
                <Value>{entity.keywords}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.tags" />:
                </Label>
                <Value>{entity.tags}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.access_policy" />:
                </Label>
                <Value>{entity.access_policy}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.branches" />:
                </Label>
                <Value>{entity.branches}</Value>
              </li>
              <li>
                <Label>
                  <IntlMessages id="item.attributes.badges" />:
                </Label>
                <Value>{entity.badges}</Value>
              </li>
            </ul>
          </Box>
          <BoxTitle title={<IntlMessages id="item.show.sku.title" />} />
          {(entity.sku ? entity.sku : []).map(sku => {
            return (
              <Box key={sku.sku_code}>
                <ul>
                  <li>
                    <Label>sku_code:</Label>
                    <Value>{sku.sku_code}</Value>
                  </li>
                  <li>
                    <Label>sales_start_timestamp:</Label>
                    <Value>{sku.sales_start_timestamp}</Value>
                  </li>
                  <li>
                    <Label>sales_end_timestamp:</Label>
                    <Value>{sku.sales_end_timestamp}</Value>
                  </li>
                  <li>
                    <Label>status:</Label>
                    <Value>{sku.status}</Value>
                  </li>
                  <li>
                    <Label>start_timestamp:</Label>
                    <Value>{sku.start_timestamp}</Value>
                  </li>
                  <li>
                    <Label>end_timestamp:</Label>
                    <Value>{sku.end_timestamp}</Value>
                  </li>
                  <li>
                    <Label>item_code:</Label>
                    <Value>{sku.item_code}</Value>
                  </li>
                  <li>
                    <Label>sku_name:</Label>
                    <Value>{sku.sku_name}</Value>
                  </li>
                  <li>
                    <Label>delivery_type:</Label>
                    <Value>{sku.delivery_type}</Value>
                  </li>
                  <li>
                    <Label>msrp:</Label>
                    <Value>{sku.msrp}</Value>
                  </li>
                  <li>
                    <Label>currency_code:</Label>
                    <Value>{sku.currency_code}</Value>
                  </li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle title={<IntlMessages id="item.show.item_image.title" />} />
          {(entity.images ? entity.images : []).map(image => {
            return (
              <Box>
                <ul>
                  <li>
                    <Label>item_image_code:</Label>
                    <Value>{image.item_image_code}</Value>
                  </li>
                  <li>
                    <Label>item_code:</Label>
                    <Value>{image.item_code}</Value>
                  </li>
                  <li>
                    <Label>image_size:</Label>
                    <Value>{image.image_size}</Value>
                  </li>
                  <li>
                    <Label>image_url:</Label>
                    <Value>{image.image_url}</Value>
                  </li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle
            title={<IntlMessages id="item.show.addon_service.title" />}
          />
          {(entity.addon_services ? entity.addon_services : []).map(
            addon_service => {
              return (
                <Box>
                  <ul>
                    <li>
                      <Label>addon_service_code:</Label>
                      <Value>{addon_service.addon_service_code}</Value>
                    </li>
                    <li>
                      <Label>addon_service_name:</Label>
                      <Value>{addon_service.addon_service_name}</Value>
                    </li>
                    <li>
                      <Label>price_ex_vat:</Label>
                      <Value>{addon_service.price_ex_vat}</Value>
                    </li>
                    <li>
                      <Label>price_in_vat:</Label>
                      <Value>{addon_service.price_in_vat}</Value>
                    </li>
                    <li>
                      <Label>description:</Label>
                      <Value>{addon_service.description}</Value>
                    </li>
                    <li>
                      <Label>currency_code:</Label>
                      <Value>{addon_service.currency_code}</Value>
                    </li>
                    <li>
                      <Label>memo:</Label>
                      <Value>{addon_service.memo}</Value>
                    </li>
                  </ul>
                </Box>
              );
            }
          )}
          <BoxTitle title={<IntlMessages id="item.show.category.title" />} />
          {(entity.categories ? entity.categories : []).map(category => {
            return (
              <Box>
                <ul>
                  <li>
                    <Label>status:</Label>
                    <Value>{category.status}</Value>
                  </li>
                  <li>
                    <Label>category_code:</Label>
                    <Value>{category.category_code}</Value>
                  </li>
                  <li>
                    <Label>category_name:</Label>
                    <Value>{category.category_name}</Value>
                  </li>
                  <li>
                    <Label>category_path:</Label>
                    <Value>{category.category_path}</Value>
                  </li>
                  <li>
                    <Label>category_key:</Label>
                    <Value>{category.category_key}</Value>
                  </li>
                  <li>
                    <Label>start_timestamp:</Label>
                    <Value>{category.start_timestamp}</Value>
                  </li>
                  <li>
                    <Label>end_timestamp:</Label>
                    <Value>{category.end_timestamp}</Value>
                  </li>
                  <li>
                    <Label>description:</Label>
                    <Value>{category.description}</Value>
                  </li>
                  <li>
                    <Label>memo:</Label>
                    <Value>{category.memo}</Value>
                  </li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle
            title={<IntlMessages id="item.show.relation_item.title" />}
          />
        </div>
      </RestShow>
    );
  }
}

const { request, cleanup } = actions.fetch;

const mapStateToProps = state => {
  return state.Item.Entity.toJS();
};

export default connect(
  mapStateToProps,
  {
    request,
    cleanup,
    destroy: actions.destroy.request,
    destroyCleanup: actions.destroy.cleanup
  }
)(ShowEntity);
