<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class ProductDetailsController extends Controller
{
    /**
     * 商品詳細.
     *
     * @return Response
     */
    public function index(string $janCode)
    {
        return [
            'data'  => $this->getMockData($janCode),
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($janCode)
    {
        $data = [
            'links' => [
                [
                    'path' => '/store',
                    'name' => '無印良品トップ',
                ],
                [
                    'path' => '/store/cmdty/section/T10000',
                    'name' => '婦人ウェア',
                ],
                [
                    'path' => '/store/cmdty/section/S10003',
                    'name' => 'カットソー',
                ],
            ],
            'fav_flg' => false,
            'material' => "オーガニックコットン",
            'store_info' => [
                'toriatukai_flg' => 1,
                'labal' => '店舗受け取り不可',
            ],
            'distribution_fee' => 490,
            'color_list_select' => 0,
            'color_list' => [
                [
                    'title' => 'ライトシルバーグレー',
                    'img' => 'img-color-1.png',
                ],
                [
                    'title' => '黒',
                    'img' => 'img-color-2.png',
                ],
                [
                    'title' => 'ライトシルバーグレー×ボーダー',
                    'img' => 'img-color-3.png',
                ],
                [
                    'title' => 'ライトシルバーグレー×柄',
                    'img' => 'img-color-4.png',
                ],
            ],
            'size_list_select' => 1,
            'size_list' => [
                [
                    'title' => 'XS',
                    'value' => 'XS',
                ],
                [
                    'title' => 'S',
                    'value' => 'S',
                ],
                [
                    'title' => 'M',
                    'value' => 'M',
                ],
                [
                    'title' => 'L',
                    'value' => 'L',
                ],
                [
                    'title' => 'XL',
                    'value' => 'XL',
                ],
                [
                    'title' => 'XXL',
                    'value' => 'XXL',
                ],
            ],
            'quantity_data' => [
                'quantity' => 100,
                'max' => 10,
                'min' => 1,
            ],
            // TODO: 以下 サンプルデータ（QA26-商品詳細画面-20190118 .xlsx）について疑問点をQAに記述 : 回答にあわせ調整 or 本API対応が必要 2019/1/30
            "deliveryDivision" => "TH",
            "deliveryPrice" => "0",
            "docomoPayment" => true,
            "header" => [
                "returnCode" => "10000"
            ],
            "intensiveJanCode" => "4550002684402",
            "inventoryStatus" => "STOCK",
            "itemArrival" => false,
            "itemDivision" => "A",
            "itemName" => "オーガニックコットンストレッチタートルネックＴシャツ",
            "itemSalesStatus" => "NORMAL",
            "itemStandardName" => "婦人ＸＳ・黒",
            "janCode" => $janCode,
            "mixRate" => "綿,97%,ポリウレタン,3%,",
            "newItem" => false,
            "orderItemFlag" => false,
            "otherStoreReceive" => true,
            "price" => [
                "basicPrice" => 1290,
                "basicPriceNoTax" => 1195,
                "oldPrices" => [
                [
                    "oldPrice" => 1490,
                    "oldPriceEndDate" => "201901110932",
                    "oldPriceNoTax" => 1380
                    ]
                ]
            ],
            "priceKindList" => [
                [
                    "priceKind" => "TIMESALE",
                    "bannerInfo" => [
                        "startDate" => "201901111000",
                        "endDate" => "201901201000",
                        "section" => "S000051071",
                        "bannerWord" => "対象婦人ウェア "
                    ],
                    "iconInfo" => [
                        "iconWord" => "期間限定価格"
                    ]
                ]
            ],
            "privateWorks" => [
                [
                    "price" => 0,
                    "priceNoTax" => 0,
                    "privateWorkDivision" => "GIFT_MESSAGE",
                    "workCode" => "100",
                    "workName" => "ギフト"
                ],
                [
                    "price" => 162,
                    "priceNoTax" => 150,
                    "privateWorkDivision" => "NONE",
                    "workCode" => "101",
                    "workName" => "ギフト箱"
                ],
                [
                    "price" => 0,
                    "priceNoTax" => 0,
                    "privateWorkDivision" => "NOSHI",
                    "workCode" => "803",
                    "workName" => "のし"
                ]
            ],
            "productCountryName" => "ベトナム",
            "rakutenPayment" => true,
            "refundEnableDays" => 30,
            "resultCode" => "0",
            "salesLimitQuantity" => 20,
            "section" => [
                "S000051071",
                "S00100102",
                "S100001204",
                "S100001702"
            ],
            "selectedColorName" => "黒",
            "selectedSizeName" => "婦人ＸＳ",
            "shopReceive" => true,
            "shopStockDisplay" => true,
            "shopStockLabelDisplay" => false,
            "sizeFaqUrl" => "https://www.muji.net/mt/contact/detail_list/014770.html",
            "storeJanCode" => "02684822",
            "tags" => [
                "item_type" => "期間限定価格",
                "service" => "店舗受け取り対象",
                "service" => "ギフト包装対象",
                "service" => "5000円以上配送料無料対象",
                "service" => "コンビニ受け取り対象",
                "category" => "衣料品",
                "category" => "ネット限定サイズ",
                "category" => "ネット限定サイズ｜セーター・カーディガン",
                "category" => "カットソー",
                "category" => "長袖・七分袖",
                "category" => "毎日使うものを便利に。",
                "category" => "毎日使うものを便利に。｜一覧",
                "category" => "毎日使うものを便利に。｜婦人ウェア",
                "category" => "毎日使うものを便利に。｜婦人ウェア｜長袖カットソー",
                "category" => "期間限定価格",
                "category" => "婦人リンクス編みクルーネックセーター／二重編み長袖プルオーバーほか｜1月20日まで",
            ],
            "valiations" => [
                [
                    "colorLabel" => "ダークブラウン",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685171",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "ダークブラウン",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685164",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "ダークブラウン",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685157",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "ダークブラウン",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685140",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "ダークブラウン",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685133",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "ダークブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002685126",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "ブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4549738861898",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "黒",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4549738861775",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "ダークグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4549738861713",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "ダークネイビー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4549738861652",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "モカブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4549738861591",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "カーキグリーン",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685119",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "カーキグリーン",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685102",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "カーキグリーン",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685096",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "カーキグリーン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002685089",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "カーキグリーン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002685072",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "カーキグリーン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002685065",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "バーガンディ",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685058",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "バーガンディ",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685041",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "バーガンディ",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002685034",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "バーガンディ",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002685027",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "バーガンディ",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002685010",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "バーガンディ",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002685003",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "マスタード",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002684990",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "マスタード",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002684983",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "マスタード",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002684976",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "マスタード",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002684969",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "マスタード",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002684952",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "マスタード",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684945",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "ミディアムグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684938",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "ミディアムグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684921",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "ミディアムグレー",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002684914",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "ミディアムグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684907",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "ミディアムグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684891",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "ミディアムグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684884",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "黒",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684860",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "黒",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684853",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "黒",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684846",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "黒",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684839",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "黒",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684822",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "ダークグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684808",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "ダークグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684792",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "ダークグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684785",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "ダークグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684778",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "ダークグレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684761",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "ダークネイビー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684747",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "ダークネイビー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684730",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "ダークネイビー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684723",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "ダークネイビー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684716",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "ダークネイビー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684709",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "ブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684686",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "ブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684679",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "ブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684662",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "ブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684655",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "ブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684648",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "モカブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684624",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "モカブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684617",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "モカブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684600",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "モカブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684594",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "モカブラウン",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684587",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "グレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684570",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "グレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684563",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "グレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684556",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "グレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684549",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "グレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684532",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "グレー",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684525",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "オートミール",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684518",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "オートミール",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684501",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "オートミール",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684495",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "オートミール",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684488",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "オートミール",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684471",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "オートミール",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684464",
                    "sizeLabel" => "婦人ＸＳ"
                ],
                [
                    "colorLabel" => "オフ白",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684457",
                    "sizeLabel" => "婦人ＸＸＬ"
                ],
                [
                    "colorLabel" => "オフ白",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684440",
                    "sizeLabel" => "婦人ＸＬ"
                ],
                [
                    "colorLabel" => "オフ白",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684433",
                    "sizeLabel" => "婦人Ｌ"
                ],
                [
                    "colorLabel" => "オフ白",
                    "inventoryStatus" => "NOSTOCK",
                    "janCode" => "4550002684426",
                    "sizeLabel" => "婦人Ｍ"
                ],
                [
                    "colorLabel" => "オフ白",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684419",
                    "sizeLabel" => "婦人Ｓ"
                ],
                [
                    "colorLabel" => "オフ白",
                    "inventoryStatus" => "STOCK",
                    "janCode" => "4550002684402",
                    "sizeLabel" => "婦人ＸＳ"
                ]
            ],
            "webCatalogDescription" => "ストレッチ糸を加えて編み立て、着やすく、動きやすく仕上げました。柔らかさとほどよいフィット感が特長です。
                                        ストレッチ糸を加えて編み立て、着やすく、動きやすく仕上げました。柔らかさとほどよいフィット感が特長です。",
            "yahooPayment" => true,
        ];

        $imageTotal = 5;
        $imageBaseUrl = 'https://img.muji.net/img/item/';
        $imageSize = 1260;
        $images = [];
        for ($i = 0; $i < $imageTotal; $i++) {
            $images[] = [
                'url' => $imageBaseUrl . $janCode . ($i!=0 ? '_' . sprintf('%02d',$i) : '') . '_' . $imageSize . '.jpg',
            ];
        }
        $data['images']= $images;

        return $data;
    }
}
