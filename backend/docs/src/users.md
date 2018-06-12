FORMAT: 1A

# Group ユーザー

## ユーザー認証のエンドポイント [/api/v1/users/auth]

### ユーザー認証 [POST]

#### 処理概要

* ユーザー認証を行う。
* 認証に成功した場合、アクセストークンを返す。

+ Request (application/json)

    + Headers

            Accept: application/json

    + Attributes
        + username: test@example.com (string, required) - メールアドレス（format: email）
        + password: abc123 (string, required) - パスワード（pattern: ^[0-9A-Za-z]{6,16}$）

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean, required) - アクセストークン
        + token: f58ba22059f5a8aa8f346e0f40987adab326041fac99029c909bef2c6300821a (string, required) - アクセストークン

+ Response 401 (application/json)

+ Response 406 (application/json)



## トークン認証のエンドポイント [/api/v1/users/auth]

### トークン認証 [PUT]

#### 処理概要

* トークンの有効性チェック

+ Response 200 (application/json)

+ Response 401 (application/json)

+ Response 406 (application/json)


## ログアウトのエンドポイント [/api/v1/users/auth]

### ログアウト [DELETE]

#### 処理概要

* ログアウト処理
* 該当ユーザーのデータベースから、トークンを削除します。

+ Response 204 (application/json)

+ Response 409 (application/json)

+ Response 406 (application/json)







