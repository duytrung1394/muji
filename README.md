# MUJI EC

## 開発にあたって

当座の開発にあたり、frontend以下のこれらのファイルとその役割を把握しておいてください。

- routes.js : ルーティングを定義します。
  - 記法について詳しくは react-router-config のREADMEを参照してください https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

### ジェネレータの責任範囲の変更について

ジェネレータの責任範囲がAdminよりも小さく、redux系のモジュールのみを生成するようになりました。
ECでは画面の枠組みを共通化することが極めて困難だからです。
逆に、全体のレイアウトやコンポーネントは使い回せるようにしていく可能性が高いです。
モジュラリティの意識が以前よりも重要になってきます。

必要に応じてコンポーネントを切り出すことを恐れずに進めてください。

## フロントエンドとサーバーサイドレンダリング

`frontend` 以下にフロントエンド関係のファイルが存在します。

- `yarn start`
  - Reactを普通に開発する時向けです。最も軽く動作するので、普通に画面を開発するときはこのコマンドをを使用します。
- `yarn dev`
  - Express.JSによるサーバーサイドレンダリングを含む動作をします。コード書き換えのたびに全ての再コンパイルが走るので重いです。
  - SSRをデバッグしたい場合などに用います。
- `yarn build`, `yarn serve`
  - 基本的に本番環境用もしくは本番環境に即したデバッグ用です。
  - `yarn build` で `./build` ディレクトリ以下にファイルが計れるのでそれを `yarn serve` で配信します。

Docker 環境から立ち上げている場合、 `docker-compose.yml` 内で frontend 以下にある `yarn start` をそれぞれ手元で書き換えて利用してください。

## 開発向けの動作方法

1. Docker を入れます。
2. コンテナとPHP環境,JS(npm)環境の整備
  - `./setup.sh` を実行します。内容は以下の通り
    - `docker-compose build` を実行します
    - `docker-compose run --rm backend composer install` を実行してPHPの依存ライブラリを入れます
    - `docker-compose run --rm frontend yarn install` を実行してJSの依存ライブラリを入れます
    - `docker-compose run --rm backend php artisan migrate:refresh` を実行してDBスキーマを構築します
    - `docker-compose run --rm backend php artisan db:seed` を実行して開発用DBデータを投入します
  - `e2e` 以下で `yarn install` を実行してcypressを入れます
3. ターミナルを2つ開きます
  - `docker-compose up backend` とするとLumenが立ち上がります。ポートは `8080` です。
  - `docker-compose up frontend` とするとReact用のサーバーが立ち上がります。ポートは `3000` です。
4. lumenの環境ファイルを作成します
  - `docker-compose exec backend /bin/cp /app/.env.example /app/.env`
5. ブラウザから localhost:3000 にアクセスするとReactの画面が出るので開発できます。

## コミット前のコードフォーマット

多人数開発なので、コミット前にコードフォーマットを走らせるようにお願いします。

### フロントエンド

パッケージ類のインストール

```
docker-compose run --rm develop yarn
```

実際のフォーマット

```
docker-compose run --rm develop yarn lint:fix
```

### バックエンド

PSR2の方向で検討中です。

### git pull した時

環境更新のために以下を実行して下さい

```
docker-compose build
docker-compose run --rm backend composer install
```

## Lumen開発Tips

- ログの場所: storage/logs/lumen.log
  - `tail -f storage/logs/lumen.log` すると便利。 ただしdocker-compose upしてる画面にもほぼ同じ情報が出ているので使う機会は稀か。

## JS側開発Tips

### ローカルでの実行

Dockerを用意していますが、ローカルで実行することも可能です。
その場合は単に `yarn install` の後 `yarn start` でOKです。

## E2Eテスト

### cypress

- `e2e` ディレクトリ以下で実施

1. GUIから実行
  - `./node_modules/.bin/cypress open` を実行しcypressを起動します
  - Testsタブから実行するテストスクリプトを選択して実行します
2. コンソール上で実行
  - `./node_modules/.bin/cypress run` を実行します

## rootCauseについて

- 埋め込みタグテンプレート取得
  - [rootcause.io](https://app.therootcause.io/#%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%BC%E3%83%8E%E3%83%95%E3%82%A3/muji/settings)

- 埋め込み先htmlファイル
  - frontend/public_template/index.html

## composerの使い方

`compose install` するときは以下。

```
docker-compose run --rm backend composer install
```

`compose update` するときは以下

```
docker-compose run --rm backend composer update
```

`compose require` するときは以下

```
docker-compose run --rm backend composer require awesome-library
```

## yarn の使い方

composer とほぼ一緒ですが、以下のようにします

```
docker-compose run --rm frontend yarn install
```

## Dockerマシンの扱い方

例えばbackendインスタンスのbashコンソールを開く場合、以下のようにします

```
docker-compose exec backend /bin/bash
```

## コードジェネレータの使い方

※まだDocker化していないです。
ジェネレータは(Unix系OSユーザーにとっては)Docker化しない方が利便性が高いかもしれません。

```
# プロジェクト直下で
docker-compose run --rm develop yarn
docker-compose run --rm develop yarn scaffold
```

## productionでの動作

### ホスト名の変更

babelでのJSトランスパイルにホスト名が必要です。

環境毎に `build` (localhostでの開発) `build-preview` (プレビューサーバー) `build-release` (リリースサーバー) が用意されています。

これらに対応するホスト名の定義が `frontend/.babelrc` に存在します。

本番環境もこれと同様の設定をすることになるかと思います。

### リリースサーバーでの動作

※ここではpreviewサーバーへの動作を想定します。

まず、以下のコマンドでビルドを行います。

```
yarn build-preview
```

次に、以下のコマンドでexpressサーバーを立ち上げます。

```
PORT=80 yarn serve-preview
```

リバースプロキシ等の都合がある場合は別なポート番号を使用してください。

また、 /static 以下は単にディレクトリ内を配信しているだけなので、
フロントにnginx等を置く場合は直接配信することも可能です。
