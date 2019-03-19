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
                    'giftStartDate' => '20191019000000',
                    'giftEndDate' => '20191020235959',
                    'activeFlag' => '2',
                    'giftImageUrl' => 'https://farm5.staticflickr.com/4904/46460769305_4174650572_z.jpg',
                    'giftDetailUrl' => null,
                    'giftBarcodeDispFlg' => 0,
                    'imageTitle' => 'WEBクーポン',
                    'useNumber' => '1回',
                    'externalCouponFlg' => 0,
                    'objectText' => 'ベット、マットレスセット（併用不可）',
                    'externalStoreObject' => null,
                    'couponGlossary' => null
                ],
                [
                    'giftId' => '1770653625',
                    'giftCode' => '110000279',
                    'giftName' => 'ダグツール新商品LEDライト 10%OFFクーポン',
                    'giftType' => 1,
                    'pointBalance' => 500,
                    'pointGranted' => 500,
                    'couponRate' => '',
                    'giftStartDate' => '20191018000000',
                    'giftEndDate' => '20191019235959',
                    'activeFlag' => '2',
                    'giftImageUrl' => 'https://farm8.staticflickr.com/7807/47375853961_eb9ba2b3b5_z.jpg',
                    'giftDetailUrl' => 'https://farm8.staticflickr.com/7807/47375853961_eb9ba2b3b5_z.jpg',
                    'giftBarcodeDispFlg' => 0,
                    'imageTitle' => 'レジで見せるクーポン',
                    'useNumber' => '制限なし',
                    'externalCouponFlg' => 1,
                    'objectText' => 'タグツール新商品LEDライト（併用不可）',
                    'externalStoreObject' => "Cafa’Meal MUJI、MUJIcom店舗、MUJI to GO店舗、Found MUJI青山、キャンプ場、ファミリーマート、サークルKサンクス、日本国外店舗、あすくる、LOHACO、IDEE、ネットストア",
                    'couponGlossary' => '※一部休業中、および閉店店舗は対象外です。ご了承ください。'
                ],
                [
                    'giftId' => '1770653619',
                    'giftCode' => '110000280',
                    'giftName' => 'バレンタイン限定のクーポン',
                    'giftType' => 1,
                    'pointBalance' => 500,
                    'pointGranted' => 500,
                    'couponRate' => '',
                    'giftStartDate' => '20191021000000',
                    'giftEndDate' => '20191022235959',
                    'activeFlag' => '2',
                    'giftImageUrl' => 'https://farm8.staticflickr.com/7828/46460769225_4871dca8f6_z.jpg',
                    'giftDetailUrl' => null,
                    'giftBarcodeDispFlg' => 1,
                    'imageTitle' => 'WEBクーポン',
                    'useNumber' => '1回',
                    'externalCouponFlg' => 0,
                    'objectText' => 'チョコレート、クッキー（併用不可）',
                    'externalStoreObject' => null,
                    'couponGlossary' => null
                ]
            ],
            'count' => 3
        ];
    }
}
