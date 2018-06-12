<?php

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Artisan;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class LoginLogoutTest extends TestCase {

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
     * ログイン/ログアウト処理テスト
     *
     * @return void
     */
    public function testLoginAndLogout() {

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

        // トークン更新
        $response = (new Client())->request(
            'PUT',
            sprintf(
                '%s/api/%s/users/auth',
                config('unittest.host'),
                config('unittest.api_version')
            ),
            [
                'allow_redirects' => true,
                'headers' => [
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer ' . $this->getToken(),
                ],
            ]);

        // ステータスコードチェック
        $this->assertEquals(200, $response->getStatusCode());

        // トークン設定
        $this->setToken((string)$response->getBody());

        // ログアウト処理
        $response = (new Client())->request(
            'DELETE',
            sprintf(
                '%s/api/%s/users/auth',
                config('unittest.host'),
                config('unittest.api_version')
            ),
            [
                'allow_redirects' => true,
                'headers' => [
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer ' . $this->getToken(),
                ],
            ]);

        // ステータスコードチェック
        $this->assertEquals(204, $response->getStatusCode());
    }
}

// EOF