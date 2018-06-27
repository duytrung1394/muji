import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormInputNumber, RestFormDatePicker, RestFormTextarea, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        <RestFormInput label="JANコード" name="item_code" />
        <RestFormInput label="商品番号" name="item_code_alt" />
        <RestFormInput label="公開・非公開" name="status" />
        <RestFormDatePicker label="有効期限(FROM)" name="start_timestamp" />
        <RestFormDatePicker label="有効期限(TO)" name="end_timestamp" />
        <RestFormInput label="商品名" name="item_name" />
        <RestFormTextarea label="メモ" name="memo" />
        <RestFormInput label="商品ラベル" name="item_label" />
        <RestFormTextarea label="概要" name="description" />
        <RestFormInput label="予約フラグ" name="reservation_flag" />
        <RestFormInput label="店頭受取フラグ" name="store_receive_flag" />
        <RestFormInput label="ブランドコード" name="brand_code" />
        <RestFormInputNumber label="ソート順" name="priority" />
        <RestFormInput label="プロモーションステータス" name="promotion_status" />
        <RestFormInput label="仕様情報" name="spec_info" />
        <RestFormInput label="サイズ情報" name="size_info" />
        <RestFormInput label="リンクURL" name="link_urls" />
        <RestFormInput label="商品属性" name="attributes" />
        <RestFormInput label="キーワード" name="keywords" />
        <RestFormInput label="タグ" name="tags" />
        <RestFormInput label="アクセスポリシー" name="access_policy" />
        <RestFormInput label="ブランチ情報" name="branches" />
        <RestFormInput label="バッヂ" name="badges" />
        <RestFormInput label="lang" name="lang" />
        <RestFormInput label="addon_service_codes" name="addon_service_codes" />
        <RestFormSubmit label="保存" />
      </RestForm>
    );
  }
}
