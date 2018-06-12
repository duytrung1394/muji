<?php

abstract class TestCase extends Laravel\Lumen\Testing\TestCase {

    public static $token;

    /**
     * テストケース処理前処理メソッド
     */
    public function setUp() {

        file_put_contents(
            __DIR__ . '/../.env',
            preg_replace(
                '/^DB_DATABASE=fbp-control$/m',
                'DB_DATABASE=fbp-control-testing',
                file_get_contents(__DIR__ . '/../.env')
            )
        );

        parent::setUp();
    }

    /**
     * テストケース終了後処理メソッド
     */
    public function downApplication() {
        file_put_contents(
            __DIR__ . '/../.env',
            preg_replace(
                '/^DB_DATABASE=fbp-control-testing$/m',
                'DB_DATABASE=fbp-control',
                file_get_contents(__DIR__ . '/../.env')
            )
        );
    }

    /**
     * Creates the application.
     *
     * @return \Laravel\Lumen\Application
     */
    public function createApplication() {


        return require __DIR__ . '/../bootstrap/app.php';
    }

    public function setToken($json_text) {
        $json = json_decode($json_text);
        self::$token = $json->token;
    }

    public function getToken() {
        return self::$token;
    }

}

// EOF