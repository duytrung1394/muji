<?php

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Artisan;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class UserAddUpdateDeleteTest extends TestCase {

    /**
     * テストケース処理前処理メソッド
     */
    public function setUp() {
        parent::setUp();
        Artisan::call('migrate:refresh');
        Artisan::call('db:seed');
    }

    /**
     * テストケース終了後処理メソッド
     */
    public function tearDown() {
        Artisan::call('migrate:reset');
        $this->downApplication();
    }

    /**
     * ユーザー追加削除処理テスト
     *
     * @return void
     */
    public function testUserAddUpdateDelete() {

        // ログイン処理
        $response = (new Client())->request(
            'POST',
            sprintf(
                '%s/api/%s/users/auth',
                config('unittest.host'),
                config('unittest.api_version')
            ),
            [
                'allow_redirects' => true,
                'headers' => [
                    'Accept' => 'application/json',
                ],
                'form_params' => array(
                    "username" => config('unittest.login_username'),
                    "password" => config('unittest.login_password')
                ),
            ]);

        // ステータスコードチェック
        $this->assertEquals(200, $response->getStatusCode());

        // トークン設定
        $this->setToken((string)$response->getBody());

        // プロフィール画像仮アップロード
        $response = (new Client())->request(
            'POST',
            sprintf(
                '%s/api/%s/users/profile',
                config('unittest.host'),
                config('unittest.api_version')
            ),
            [
                'allow_redirects' => true,
                'headers' => [
                    'Accept' => 'application/json',
                    'Authorization' => 'Bearer ' . $this->getToken(),
                ],
                'multipart' => [
                    [
                        'name' => 'photo',
                        'contents' => fopen(resource_path() . '/images/no_profile.png', 'r'),
                    ],
                ]
            ]);

        // ステータスコードチェック
        $this->assertEquals(200, $response->getStatusCode());

        // プロフィールトークン取得
        $profile_token = json_decode((string)$response->getBody());

        // プロフィールトークンチェック
        $this->assertFalse(is_null($profile_token));

        // ユーザー追加
        $response = (new Client())->request(
            'POST',
            sprintf(
                '%s/api/%s/users',
                config('unittest.host'),
                config('unittest.api_version')
            ),
            [
                'allow_redirects' => true,
                'headers' => [
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/x-www-form-urlencoded',
                    'Authorization' => 'Bearer ' . $this->getToken(),
                ],
                'form_params' => array(
                    "username" => 'user1@test.com',
                    "password" => '1234',
                    "roles" => '[1,2,3,4]',
                    "last_name" => 'ユーザー',
                    "first_name" => '太郎1',
                    "reset_password" => 1,
                    "photo" => $profile_token->data,
                ),
            ]);

        // ステータスコードチェック
        $this->assertEquals(200, $response->getStatusCode());

        // 追加されたユーザーID取得
        $add_info = json_decode((string)$response->getBody());
        $this->assertFalse(is_null($add_info));

        // ユーザー削除
        $response = (new Client())->request(
            'DELETE',
            sprintf(
                '%s/api/%s/users/' . $add_info->id,
                config('unittest.host'),
                config('unittest.api_version')
            ),
            [
                'allow_redirects' => true,
                'headers' => [
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/x-www-form-urlencoded',
                    'Authorization' => 'Bearer ' . $this->getToken(),
                ],
            ]);

        // ステータスコードチェック
        $this->assertEquals(204, $response->getStatusCode());
    }
}

// EOF