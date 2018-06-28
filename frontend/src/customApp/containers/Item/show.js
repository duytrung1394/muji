import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/item/entity/actions';

import Box from '../../../components/utility/box';
import BoxTitle from '../../../components/utility/boxTitle';

import styled from 'styled-components';

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
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="アイテム"
        pkName="item_code"
        baseUrl="/dashboard/items"
        {...this.props}
      >
        <div>
          <BoxTitle title="アイテム情報" />
          <Box>
            <ul>
              <li><Label>JANコード:</Label><Value>{entity.item_code}</Value></li>
              <li><Label>商品番号:</Label><Value>{entity.item_code_alt}</Value></li>
              <li><Label>公開・非公開:</Label><Value>{entity.status}</Value></li>
              <li><Label>有効期限(FROM):</Label><Value>{entity.start_timestamp}</Value></li>
              <li><Label>有効期限(TO):</Label><Value>{entity.end_timestamp}</Value></li>
              <li><Label>商品名:</Label><Value>{entity.item_name}</Value></li>
              <li><Label>メモ:</Label><Value>{entity.memo}</Value></li>
              <li><Label>商品ラベル:</Label><Value>{entity.item_label}</Value></li>
              <li><Label>概要:</Label><Value>{entity.description}</Value></li>
              <li><Label>予約フラグ:</Label><Value>{entity.reservation_flag}</Value></li>
              <li><Label>店頭受取フラグ:</Label><Value>{entity.store_receive_flag}</Value></li>
              <li><Label>ブランドコード:</Label><Value>{entity.brand_code}</Value></li>
              <li><Label>ソート順:</Label><Value>{entity.priority}</Value></li>
              <li><Label>プロモーションステータス:</Label><Value>{entity.promotion_status}</Value></li>
              <li><Label>仕様情報:</Label><Value>{entity.spec_info}</Value></li>
              <li><Label>サイズ情報:</Label><Value>{entity.size_info}</Value></li>
              <li><Label>リンクURL:</Label><Value>{entity.link_urls}</Value></li>
              <li><Label>商品属性:</Label><Value>{entity.attributes}</Value></li>
              <li><Label>キーワード:</Label><Value>{entity.keywords}</Value></li>
              <li><Label>タグ:</Label><Value>{entity.tags}</Value></li>
              <li><Label>アクセスポリシー:</Label><Value>{entity.access_policy}</Value></li>
              <li><Label>ブランチ情報:</Label><Value>{entity.branches}</Value></li>
              <li><Label>バッヂ:</Label><Value>{entity.badges}</Value></li>
            </ul>
          </Box>
          <BoxTitle title="SKU" />
          {(entity.sku ? entity.sku : []).map(sku => {
            return (
              <Box>
                <ul>
                  <li><Label>sku_code:</Label><Value>{sku.sku_code}</Value></li>
                  <li><Label>sales_start_timestamp:</Label><Value>{sku.sales_start_timestamp}</Value></li>
                  <li><Label>sales_end_timestamp:</Label><Value>{sku.sales_end_timestamp}</Value></li>
                  <li><Label>status:</Label><Value>{sku.status}</Value></li>
                  <li><Label>start_timestamp:</Label><Value>{sku.start_timestamp}</Value></li>
                  <li><Label>end_timestamp:</Label><Value>{sku.end_timestamp}</Value></li>
                  <li><Label>item_code:</Label><Value>{sku.item_code}</Value></li>
                  <li><Label>sku_name:</Label><Value>{sku.sku_name}</Value></li>
                  <li><Label>delivery_type:</Label><Value>{sku.delivery_type}</Value></li>
                  <li><Label>msrp:</Label><Value>{sku.msrp}</Value></li>
                  <li><Label>currency_code:</Label><Value>{sku.currency_code}</Value></li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle title="アイテム画像" />
          {(entity.images ? entity.images : []).map(image => {
            return (
              <Box>
                <ul>
                  <li><Label>item_image_code:</Label><Value>{image.item_image_code}</Value></li>
                  <li><Label>item_code:</Label><Value>{image.item_code}</Value></li>
                  <li><Label>image_size:</Label><Value>{image.image_size}</Value></li>
                  <li><Label>image_url:</Label><Value>{image.image_url}</Value></li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle title="付帯商品" />
          {(entity.addon_services ? entity.addon_services : []).map(addon_service => {
            return (
              <Box>
                <ul>
                  <li><Label>addon_service_code:</Label><Value>{addon_service.addon_service_code}</Value></li>
                  <li><Label>addon_service_name:</Label><Value>{addon_service.addon_service_name}</Value></li>
                  <li><Label>price_ex_vat:</Label><Value>{addon_service.price_ex_vat}</Value></li>
                  <li><Label>price_in_vat:</Label><Value>{addon_service.price_in_vat}</Value></li>
                  <li><Label>description:</Label><Value>{addon_service.description}</Value></li>
                  <li><Label>currency_code:</Label><Value>{addon_service.currency_code}</Value></li>
                  <li><Label>memo:</Label><Value>{addon_service.memo}</Value></li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle title="カテゴリ" />
          {(entity.categories ? entity.categories : []).map(category => {
            return (
              <Box>
                <ul>
                  <li><Label>status:</Label><Value>{category.status}</Value></li>
                  <li><Label>category_code:</Label><Value>{category.category_code}</Value></li>
                  <li><Label>category_name:</Label><Value>{category.category_name}</Value></li>
                  <li><Label>category_path:</Label><Value>{category.category_path}</Value></li>
                  <li><Label>category_key:</Label><Value>{category.category_key}</Value></li>
                  <li><Label>start_timestamp:</Label><Value>{category.start_timestamp}</Value></li>
                  <li><Label>end_timestamp:</Label><Value>{category.end_timestamp}</Value></li>
                  <li><Label>description:</Label><Value>{category.description}</Value></li>
                  <li><Label>memo:</Label><Value>{category.memo}</Value></li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle title="関連商品" />
        </div>
      </RestShow>
    );
  }
}

const {
  request,
  cleanup,
} = actions.fetch;


const mapStateToProps = (state) => {
  return state.Item.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
