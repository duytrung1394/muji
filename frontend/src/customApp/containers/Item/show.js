import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/item/entity/actions';

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
          
          <li>AddonServiceCodes: {entity.addon_service_codes}</li>
          <li>Lang: {entity.lang}</li>
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
  return state.Item.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
