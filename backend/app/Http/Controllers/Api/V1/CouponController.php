<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class CouponController extends Controller
{
    /**
     * Display a listing of coupon
     *
     * @return Response
     */
    public function getGiftList(Request $request)
    {
        return [
            'data' => [
                [
                    'giftId' => '1770653629',
                    'giftCode' => '110000278',
                    'giftName' => 'ベット+マットレスセット購入で10%OFF',
                    'giftType' => 1,
                    'pointBalance' => 500,
                    'pointGranted' => 500,
                    'couponRate' => '',
                    'giftStartDate' => '20130205000000',
                    'giftEndDate' => '20130305235959',
                    'activeFlag' => '2',
                    'giftImageUrl' => 'https://lontopi.com/wp-content/uploads/2017/10/111-1-300x200.jpg',
                    'giftDetailUrl' => null,
                    'giftBarcodeDispFlg' => 0,
                ],
                [
                    'giftId' => '1770653625',
                    'giftCode' => '110000279',
                    'giftName' => 'ダグツール新商品LEDライト 10%OFFクーポン',
                    'giftType' => 1,
                    'pointBalance' => 500,
                    'pointGranted' => 500,
                    'couponRate' => '',
                    'giftStartDate' => '20130205000000',
                    'giftEndDate' => '20130305235959',
                    'activeFlag' => '2',
                    'giftImageUrl' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38kI29wCEN23P6ocIWhF36_ZClYzniXpMbRYGxPvvML5Loi9u',
                    'giftDetailUrl' => null,
                    'giftBarcodeDispFlg' => 0,
                ],
                [
                    'giftId' => '1770653619',
                    'giftCode' => '110000280',
                    'giftName' => 'バレンタイン限定のクーポン',
                    'giftType' => 1,
                    'pointBalance' => 500,
                    'pointGranted' => 500,
                    'couponRate' => '',
                    'giftStartDate' => '20130205000000',
                    'giftEndDate' => '20130305235959',
                    'activeFlag' => '2',
                    'giftImageUrl' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjODIfaF_7gkkWX3boon8OeaSHsxvWflTQFlI3scm8uI_r6Rqyg',
                    'giftDetailUrl' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjODIfaF_7gkkWX3boon8OeaSHsxvWflTQFlI3scm8uI_r6Rqyg',
                    'giftBarcodeDispFlg' => 1,
                ]
            ],
            'count' => 3
        ];
    }
}
