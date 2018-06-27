import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/item/entity/actions';

import Box from '../../../components/utility/box';
import BoxTitle from '../../../components/utility/boxTitle';

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
              <li>JANコード: {entity.item_code}</li>
              <li>商品番号: {entity.item_code_alt}</li>
              <li>公開・非公開: {entity.status}</li>
              <li>有効期限(FROM): {entity.start_timestamp}</li>
              <li>有効期限(TO): {entity.end_timestamp}</li>
              <li>商品名: {entity.item_name}</li>
              <li>メモ: {entity.memo}</li>
              <li>商品ラベル: {entity.item_label}</li>
              <li>概要: {entity.description}</li>
              <li>予約フラグ: {entity.reservation_flag}</li>
              <li>店頭受取フラグ: {entity.store_receive_flag}</li>
              <li>ブランドコード: {entity.brand_code}</li>
              <li>ソート順: {entity.priority}</li>
              <li>プロモーションステータス: {entity.promotion_status}</li>
              <li>仕様情報: {entity.spec_info}</li>
              <li>サイズ情報: {entity.size_info}</li>
              <li>リンクURL: {entity.link_urls}</li>
              <li>商品属性: {entity.attributes}</li>
              <li>キーワード: {entity.keywords}</li>
              <li>タグ: {entity.tags}</li>
              <li>アクセスポリシー: {entity.access_policy}</li>
              <li>ブランチ情報: {entity.branches}</li>
              <li>バッヂ: {entity.badges}</li>
            </ul>
          </Box>
          <BoxTitle title="SKU" />
          {(entity.sku ? entity.sku : []).map(sku => {
            return (
              <Box>
                <ul>
                  <li>sku_code: {sku.sku_code}</li>
                  <li>sales_start_timestamp: {sku.sales_start_timestamp}</li>
                  <li>sales_end_timestamp: {sku.sales_end_timestamp}</li>
                  <li>status: {sku.status}</li>
                  <li>start_timestamp: {sku.start_timestamp}</li>
                  <li>end_timestamp: {sku.end_timestamp}</li>
                  <li>item_code: {sku.item_code}</li>
                  <li>sku_name: {sku.sku_name}</li>
                  <li>delivery_type: {sku.delivery_type}</li>
                  <li>msrp: {sku.msrp}</li>
                  <li>currency_code: {sku.currency_code}</li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle title="アイテム画像" />
          {(entity.images ? entity.images : []).map(image => {
            return (
              <Box>
                <ul>
                  <li>item_image_code: {image.item_image_code}</li>
                  <li>item_code: {image.item_code}</li>
                  <li>image_size: {image.image_size}</li>
                  <li>image_url: {image.image_url}</li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle title="付帯商品" />
          {(entity.addon_services ? entity.addon_services : []).map(addon_service => {
            return (
              <Box>
                <ul>
                  <li>addon_service_code: {addon_service.addon_service_code}</li>
                  <li>addon_service_name: {addon_service.addon_service_name}</li>
                  <li>price_ex_vat: {addon_service.price_ex_vat}</li>
                  <li>price_in_vat: {addon_service.price_in_vat}</li>
                  <li>description: {addon_service.description}</li>
                  <li>currency_code: {addon_service.currency_code}</li>
                  <li>memo: {addon_service.memo}</li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle title="カテゴリ" />
          {(entity.categories ? entity.categories : []).map(category => {
            return (
              <Box>
                <ul>
                  <li>status: {category.status}</li>
                  <li>category_code: {category.category_code}</li>
                  <li>category_name: {category.category_name}</li>
                  <li>category_path: {category.category_path}</li>
                  <li>category_key: {category.category_key}</li>
                  <li>start_timestamp: {category.start_timestamp}</li>
                  <li>end_timestamp: {category.end_timestamp}</li>
                  <li>description: {category.description}</li>
                  <li>memo: {category.memo}</li>
                </ul>
              </Box>
            );
          })}
          <BoxTitle title="関連商品" />
          <Box>
          <ul>
            <li>code: .....</li>
            <li>name: .....</li>
          </ul>
          </Box>
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
