import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const DeliveryWrapper = styled.div`
  padding: 0 16px 16px 16px;
  background-color: #F2F2F2;
`;

const DeliveryStyle = styled.div`
  padding: 16px;
  background-color: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: rgb(88, 88, 88);
  margin-bottom: 0;
`;

const TitleSpan = styled.span`
  margin-left: 20px;
`;

const DeliverySchedule = styled.div`
  font-size: 13px;
  margin-top: 12px;
`;

const OrderItem = styled.div`
  margin-top: 30px;
`;

const OrderItemUl = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const OrderItemli = styled.li`
  padding: 10px;
  border-top: 1px solid rgb(153, 153, 153);
`;

const Delivery = () => {
  return (
    <DeliveryWrapper>
      <DeliveryStyle>
        <Title>
          配送便：1<TitleSpan>配送区分：小物</TitleSpan>
        </Title>
        <DeliverySchedule>
          お届け予定：2019年10月30日（火）通常便<p />
        </DeliverySchedule>
        【お届け日時の指定　ボタン】<p />
        <OrderItem>
          <OrderItemUl>
            <OrderItemli>
              img<br />
              カットソー<br />
              ミニ裏毛五分袖ワイドＴシャツ<br />
              カラー：ライトシルバーグレー<br />
              サイズ：S<br />
              個数：1<br />
              税込2,980円
            </OrderItemli>
            <OrderItemli>
              img<br />
              カットソー<br />
              スムースハイネックワンピース<br />
              カラー：チャコールグレー<br />
              サイズ：S<br />
              個数：1<br />
              税込 3,000 円 → 税込2,903円<br />
            （期間限定価格）
            </OrderItemli>
        </OrderItemUl>
      </OrderItem>
      </DeliveryStyle>
    </DeliveryWrapper>
  );
};
    
export default Delivery;