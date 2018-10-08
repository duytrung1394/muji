import React from "react";
import { Select } from "antd";

const Option = Select.Option;

const SelectPrefecture = props => {
  return (
    <Select
      defaultValue={props.defaultValue ? props.defaultValue : "00"}
      onChange={props.onChange}
      >
      <Option value="00">都道府県から店舗を探す</Option>
      <Option value="北海道">北海道</Option>
      <Option value="青森県">青森県</Option>
      <Option value="岩手県">岩手県</Option>
      <Option value="宮城県">宮城県</Option>
      <Option value="秋田県">秋田県</Option>
      <Option value="山形県">山形県</Option>
      <Option value="福島県">福島県</Option>
      <Option value="茨城県">茨城県</Option>
      <Option value="栃木県">栃木県</Option>
      <Option value="群馬県">群馬県</Option>
      <Option value="埼玉県">埼玉県</Option>
      <Option value="千葉県">千葉県</Option>
      <Option value="東京都">東京都</Option>
      <Option value="神奈川県">神奈川県</Option>
      <Option value="新潟県">新潟県</Option>
      <Option value="富山県">富山県</Option>
      <Option value="石川県">石川県</Option>
      <Option value="福井県">福井県</Option>
      <Option value="山梨県">山梨県</Option>
      <Option value="長野県">長野県</Option>
      <Option value="岐阜県">岐阜県</Option>
      <Option value="静岡県">静岡県</Option>
      <Option value="愛知県">愛知県</Option>
      <Option value="三重県">三重県</Option>
      <Option value="滋賀県">滋賀県</Option>
      <Option value="京都府">京都府</Option>
      <Option value="大阪府">大阪府</Option>
      <Option value="兵庫県">兵庫県</Option>
      <Option value="奈良県">奈良県</Option>
      <Option value="和歌山県">和歌山県</Option>
      <Option value="鳥取県">鳥取県</Option>
      <Option value="島根県">島根県</Option>
      <Option value="岡山県">岡山県</Option>
      <Option value="広島県">広島県</Option>
      <Option value="山口県">山口県</Option>
      <Option value="徳島県">徳島県</Option>
      <Option value="香川県">香川県</Option>
      <Option value="愛媛県">愛媛県</Option>
      <Option value="高知県">高知県</Option>
      <Option value="福岡県">福岡県</Option>
      <Option value="佐賀県">佐賀県</Option>
      <Option value="長崎県">長崎県</Option>
      <Option value="熊本県">熊本県</Option>
      <Option value="大分県">大分県</Option>
      <Option value="宮崎県">宮崎県</Option>
      <Option value="鹿児島県">鹿児島県</Option>
      <Option value="沖縄県">沖縄県</Option>
    </Select>
  );
};

export default SelectPrefecture;
