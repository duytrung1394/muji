### なぜ React + Redux + Saga なのか
UIが動的に変化するフロントエンドは、複雑になればなるほど、開発もメンテナンスも難しくなっていきます。

たとえばユーザのクリックがあったときにサーバへAjax通信をして、情報が戻ってきたら関連するDOMを操作する……それだけなら良いのですが、その情報がひとつの要素のみならず多くの要素の見た目にかかわる場合や、サーバから情報が返ってくるまで一時的に待ち画面を表示させ、後に完了画面を表示させるなどアプリケーションの状態によって見た目が何段階にも変化する場合は、とても慎重に作っていく必要があります。これが大規模になると難しくなっていくことは想像に難くないと思います。

そんな「困った！」を強力にサポートしてくれるのが React + Redux の組み合わせ。そして、Reduxの通信部分などをさらに補強するのが Saga です。

伝統的なMVCモデルに則って言えば、ReactはView（見た目）、ReduxはController（処理の振り分け）とModel（ビジネスロジック）を担当します。

### React
動的なUIを作るためのJavaScriptライブラリです。

- DOMの変更が速い。
- JavaScript内部にHTMLっぽいタグが書ける。
- すべてをコンポーネントとして扱う。

といった特徴がありますが、開発においてはコンポーネントについて理解することが特に重要になってきます。

Reactでは、すべての要素を「コンポーネント」として扱い、複数のコンポーネントを組み合わせてひとつのページを構成します。それぞれのコンポーネントはrenderメソッドを持ち、()でくくられたHTMLタグを戻り値として返却します。(このHTMLタグっぽいものは後でJSXというツールが普通のJavaScriptに翻訳してくれます。便利。)

コンポーネントは内部にstateを持ち、そのstateによって見た目を変化させるように条件を記述しておくことができます。

たとえば、タスクリストを一覧で管理するアプリケーションがあり、追加、編集、削除などができるとします。この場合は、タスク一覧というコンポーネントの中に、複数のタスクコンポーネントが入っていて、それぞれのタスクが表示する情報（タスクの内容、編集中かどうか、完了したかどうか）をstateとして内部に持つことができます。そして、ユーザのクリックイベントによって「編集中かどうか」stateを変更し、入力欄を表示させたり、完了したかどうかの情報をもとにそのタスクを非表示にしたり、ユーザの入力値を「タスクの内容」stateに設定して、表示されるタスクの内容を変更することができます。

#### 参考
- [5分で理解する React.js](https://qiita.com/tomzoh/items/7fabe7cb57dd96425867)  ※サーバ通信関連の記述は読み飛ばしてください。

- [React.js コンポーネント入門（props/state）](https://qiita.com/KeitaMoromizato/items/0da6c8e4264b1f206451)


### Redux　+ Saga

Reactのコンポーネントはstateを内部に持つと説明しました。しかし、コンポーネントごとにstateを持ってしまうと、コンポーネント間での情報共有が課題になります。Reduxを使えば、Storeという巨大なJsonにすべてのstateを保持して、Storeに変更があるたびに関連するコンポーネントを自動的に更新してくれるので、その心配がありません。

つまり、Reduxはデータの変更を上手くマネージメントしてくれるアーキテクチャです。

ReduxにはAction, Reducer, Storeと呼ばれるものがあります。
それぞれの役割を一言でまとめると、
- Actionはユーザの発生させたイベントをReducerに伝えるオブジェクト
- ReducerはActionに応じてビジネスロジックとデータアクセスを担うクラス
- Storeはすべてのデータを保持する巨大なJson

と言えます。また、実装ではActionCreatorと呼ばれる、Actionオブジェクトを作って送るためのクラスが設けられることが多いです。

ところで、ReduxにはMiddlewareという仕組みがあります。MiddlewareはReduxに追加できるサードパーティツールで、Actionがdispatchされた後・Reducerにたどり着く前に実行されます。Middlewareにはログ出力を行うもの、クラッシュレポート出すもの、非同期通信を行うものなど様々なものがあります。本プロジェクトでは非同期通信をサポートするRedux-Sagaを採用しています。

Redux-Sagaは非同期通信をサポートするミドルウェアです。
SagaはActionを受け取り、任意のロジックを非同期で処理します。Saga内で他のSagaを呼び出したり、Actionを発行することもできます。たとえば、TODOアプリで新規タスクの追加があった場合、Sagaでサーバと通信を行い、結果が返却されたらSUCCESS/FAILUREのアクションを発行するというようなことができます。

Redux-Sagaを使用した場合の流れは下記のようになります。図も用意しましたので、照らし合わせて見てみてください。
1. ユーザが画面をクリック（DOMイベント発生→ActionCreatorを呼び出し）
2. ActionCreatorがイベントに応じてActionオブジェクトを作成してdispatch
3. dispatchされたActionに応じて、ReducerがStoreから既存のデータを取得し、所定の処理を行ったあとの新しいデータをStoreに登録
4. Storeで変更されたデータに関連するコンポーネントが変化（自動）
5. 見た目に反映される（自動）

#### Redux用語集

- Action
  - アクションの種別(type)とデータ(payload)を持つ小さなオブジェクト。
  - アクション種別はAction.js内で定数として持ち、それをswitchする。
  - ReducerがStoreを変更するために必要になる情報
  - `{type: 'GET_USER', payload: {user_id: 123}}` みたいなもの。データ部はpayloadという名前でない場合も多い。
  - このオブジェクトをdispatchというメソッドでReduxライブラリに投げるとReducerとかSagaとかに渡されて実際やりたい処理を発火できる。
  - Actionの役割は、どの機能を動かすべきなのかReducerに伝えること。

- ActionCreator
  - DOMイベントに呼び出され、前述のActionを作ってdispatchするためだけのクラス
  - isomorphicのAction.jsは実を言うとActionCreator

- Reducer
  - ビジネスロジックとStoreの変更を担うクラス。
  - dispatchされたActionを受け取り、Storeから既存のデータオブジェクトを取得してActionに応じた変更を行い、Storeに新しく登録する。

- Store
  - アプリケーションに表示するデータや、それぞれのコンポーネントの状態を保持する大きなJSONオブジェクト。
  - mapStateToPropsによって、Stateは関連するComponentと紐づけられ、Stateの変化は自動的にコンポーネントに反映される。

- Saga
  - ここでstate弄るなreducerを呼び直してねって話
  - SUCCESS/FAILUREのアクション作るのは一般的だから疑わなくて良いよって話 (reducerでstateを弄る都合上、仕方ないんですよね…)

### StoreはImmutableだという話

これは重要です。
Storeはimmutableなオブジェクト（TODO もっと詳しく）

### 最近のJS記法


#### オブジェクト
- オブジェクトを合体させたい
```
let newObj = {...obj, ...otherObj}
```

- オブジェクト内の変数の値を上書きしたい
```
let obj = {
  name: "hoge",
  age: "20"
}
let otherObj = {
  name: "foo",
}

let newObj = {...obj, ...otherObj}
```
`newObj`には`{name: "foo", age: "20"}`が入る。

### 最近のJS記法いろいろ

#### {title} = obj;みたいなもの
分割記法と言います。
複数の値を持つオブジェクトから一部の要素を変数として取り出す記法です。

コード：
```
let obj = {
  title : "Overview",
  category: "doc"
}
{title} = obj;

console.log(title);
```

コンソール：
``` 
Overview
 ```

[分割記法](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

#### let, const
- letは変数のスコープを関数内に限定する記法。
- letは変数のスコープをブロック内に限定する記法。
- constは宣言後の値の変更を不可にする。

参考：

[letよりすごいletとconst。](https://ginpen.com/2017/12/02/let-let-const/)

#### export default
他のファイルがそのファイルをimportしたとき呼び出せるようにするための記述。

参考：

[デフォルトエクスポートを使用する](https://developer.mozilla.org/ja/docs/web/javascript/reference/statements/export#Using_the_default_export)

[使いこなそう！テンプレートリテラルとimport/exportステートメント](http://liginc.co.jp/273154)

#### ['new', ...rest], {hoge, ...rest} みたいなもの
...はオブジェクト・配列を展開する記法。元の新しい配列を利用して新しい配列を作成する場合に使用できる。

```
let rest = [1,2,3,4];
let result = [0, ...rest];
```
このとき、変数`result`には`[0,1,2,3,4]`という配列が入る。

同様の記法はオブジェクトにも使用できる。
```
let foo = {id: 1, name: "hoge"};
let bar = {age: "22"};
let result = {...foo, ...bar};
```
このとき、変数`result`には`{id: 1, name: "hoge", age: "22"}`というオブジェクトが入る。キーが重複した場合は後者の値によって上書きされる。
ちなみに...を付けない場合は`{foo: {id: 1, name: "hoge"}, bar: {age: "22"}}`となる。

### アンチパターンを見てみる



##### 余談

- Reactのステート
  - ステートは直訳すれば「状態」ですが、「コンポーネントに関わる情報」と考えたほうがよさそうです。たとえば筆者は「状態」と聞くと、タスク管理アプリであれば「完了・未完了」などを思い浮かべますが、Reactのステートはそれらに加えて「タスクの内容」もステートに持ちます。

- Reduxの理解
 - ReducerはStoreから既存のデータを取得し、所定の処理を行ったあと新しいデータをStoreに登録します。MVCモデルに親しんでいる場合は、Store=データベースのようなもの、Reducer=ビジネスロジックみたいなもの、ActionCreator=コントローラのようなものと考えると想像がつきやすいかもしれません。

 - 便利なミドルウェアたち
   - Actionが呼ばれるたびにコンソールログを出力 : [redux-logger](https://github.com/evgenyrodionov/redux-logger)

#### 参考

- [実践 Redux Saga](http://www.s-arcana.co.jp/blog/2017/03/07/3499)

- [Redux の考え方（基礎編）](http://mid0111.hatenablog.com/entry/2016/01/11/190529)

- [ReactとFluxとReduxについて順を追って整理する](https://hogehuga.com/post-1095/)

- [Reduxの基本 ~ 公式ドキュメント Basics~](https://qiita.com/kazmaw/items/9fb069c551d33a7c1c84)

- [redux-sagaの覚書](https://qiita.com/masarufuruya/items/a836dfd9d74e82ef9757)

- [redux-saga](https://github.com/redux-saga/redux-saga/blob/master/README_ja.md)

#### 参考（英語）
公式チュートリアル以外に役に立ったもの。単純にメモとして。

- [Middlewares And React Redux Life Cycle](https://medium.com/@rajaraodv/using-middlewares-in-react-redux-apps-f7c9652610c6)

- [REACT REDUX TUTORIAL](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)

- [Why React/Redux is so Cool](https://www.youtube.com/watch?v=q__IMQOphLU)