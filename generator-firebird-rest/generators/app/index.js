'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const {camelCase, snakeCase, constantCase, pascalCase, paramCase, titleCase} = require('change-case');
const pluralize =  require('pluralize');
const esprima = require('esprima');
const escodegen = require('escodegen');
const prettier = require('prettier');
const translate = require('translate');
const jsonBeautify = require("json-beautify");

// 鈴木が適当に取得したyandexのapiキーを使います
translate.engine = 'yandex';
translate.key = 'trnsl.1.1.20180702T044209Z.446364a6562a5ca9.f10245d83ffaf6fcc6ebb263829d2dde7ad0bfb0';

const escodegenOption = {
  format: {
    indent: {
      style: '  '
    }
  }
};
const comment = "// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください";

// 配列を元に翻訳する。カラム用を想定したもの。
const genTranslatedMap = async (array, lang = 'ja') => {
  let dict = new Map();
  await Promise.all(array.map( async (v) => {
    dict[v] = await translate(titleCase(v), {from: 'en', to: lang})
  }));
  return dict;
}

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the marvelous ${chalk.red('generator-firebird-rest')} generator!`)
    );

    const props = await this.prompt([{
      type: 'input',
      name: 'rawname',
      message: 'reduxにおけるリソース名を入力してください。複数語の場合はcamelCaseで入力してください',
      default: 'task',
    },
    {
      type: 'input',
      name: 'endpoint',
      message: 'APIのエンドポイントを入力してください',
      default: (props)=> paramCase(pluralize(props.rawname)),
    },
    {
      type: 'input',
      name: 'pkName',
      message: 'プライマリキーの名前を入力してください',
      default: (props)=> snakeCase(props.rawname) + "_code",
    },
    {
      type: 'input',
      name: 'listColumns',
      message: 'リスト表示するカラム名をカンマ(,)区切りで入力してください',
      default: (props) => [props.pkName,'name'].join(','),
    },
    {
      type: 'list',
      name: 'linkColumnName',
      message: 'リストから詳細へリンクするカラムを選んでください',
      choices: (props) => props.listColumns.split(",").map( s => s.trim() ),
      default: (props) => props.listColumns.split(",").map( s => s.trim() ).filter( s => s != "id")[0]
    },
    {
      type: 'input',
      name: 'detailColumns',
      message: '編集・詳細表示するカラム名をカンマ(,)区切りで入力してください',
      default: 'name,description',
    },
    {
      type: 'input',
      name: 'urlbase',
      message: 'ブラウザからアクセスするURLのベース部を入力してください',
      default: (props)=> pluralize(props.rawname),
    },
    {
      type: 'input',
      name: 'jaName',
      message: '日本語名を入力してください',
      default: (props)=> translate(titleCase(props.rawname), { from: 'en', to: 'ja' }),
    },
  ]);

    if(props.name == "shared"){
      throw "名前をsharedにすることは出来ません";
    }

    this.props = props;
  }

  async writing() {
    const {
      rawname,
      endpoint,
      urlbase,
      pkName,
      jaName
    } = this.props;
    const resource_name = snakeCase(rawname);
    const resourceName = camelCase(rawname);
    const RESOURCE_NAME = constantCase(rawname);
    const ResourceName = pascalCase(rawname);
    const resourceNameSagas = `${resourceName}Sagas`;
    const end_point = snakeCase(endpoint);
    const endPoint = camelCase(endpoint);
    const EndPoint = pascalCase(endpoint);
    const listColumns = this.props.listColumns.split(',').map( s => s.trim() );
    const detailColumns = this.props.detailColumns.split(',').map( s => s.trim() );
    const linkColumnName = this.props.linkColumnName;
    // list,detailのカラムを統合したもの。 Setを使う事でユニークに。
    const columns = Array.from(new Set(listColumns.concat(detailColumns)))
    const jaColumns = await genTranslatedMap(columns, 'ja');

    // 置換対象ファイルパスを羅列
    const entityFiles = ['actions.js','reducer.js','saga.js'].map(name =>
      'frontend/src/customApp/redux/_resource_name_/entity/' + name
    );
    const listFiles = ['actions.js','reducer.js','saga.js'].map(name =>
      'frontend/src/customApp/redux/_resource_name_/list/' + name
    );
    const combineFiles = ['reducers.js','sagas.js'].map(name =>
      'frontend/src/customApp/redux/_resource_name_/' + name
    );
    const containerFiles = ['edit.js','form.js','index.js','new.js','show.js'].map(name =>
      'frontend/src/customApp/containers/_ResourceName_/' + name
    )
    const backendFiles = [
      'backend/routes/api/v1/_end_point_.php',
      'backend/app/Http/Controllers/Api/V1/_EndPoint_Controller.php',
    ]
    const files = [
      ...entityFiles,
      ...listFiles,
      ...combineFiles,
      ...containerFiles,
      ...backendFiles,
    ];

    for( const i in files ){
      const file = files[i];
      const filename = file
        .replace('_resource_name_', resource_name)
        .replace('_ResourceName_', ResourceName)
        .replace('_end_point_', end_point)
        .replace('_EndPoint_', EndPoint);

      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(filename),
        {
          rawname,
          resource_name,
          RESOURCE_NAME,
          resourceName,
          ResourceName,
          endpoint,
          end_point,
          endPoint,
          EndPoint,
          urlbase,
          listColumns,
          detailColumns,
          linkColumnName,
          pkName,
          // bind functions...
          camelCase,
          pascalCase,
          pluralize,
        },
        {
          process: (content) => {
            const script = content.toString();
            return prettier.format(script);
          }
        }
      );
    }

    // 既存ファイルの変更
    this.log(chalk.red('生成した各モジュールを本体コードから読み込むため、以降の質問にはyと答えてください'));
    // reducers.js
    const reducers_path = this.destinationPath("frontend/src/customApp/redux/reducers.js");
    this.fs.copy(
      reducers_path,
      reducers_path,
      {
        process: (content) => {
          const script = content.toString();
          const ast = esprima.parseModule(script, { sourceType: 'module'});
          const len = ast.body.length;
          const lastBody = ast.body[len-1];
          const properties = lastBody.declaration.properties;

          // 再生成を考慮して既にあったら飛ばす
          const exportedReducers = properties.map(prop => prop.value.name );
          if( ! exportedReducers.includes(ResourceName) ){
            // default export のプロパティを足す
            const propertiesLen = properties.length;
            properties.splice(propertiesLen, 0, {
              type: 'Property',
              key: { type: 'Identifier', name: ResourceName },
              value: { type: 'Identifier', name: ResourceName },
              kind: 'init',
              computed: false,
              method: false,
              shorthand: true
            })

            // import句を足す
            ast.body.splice(1,0,{
              type: 'ImportDeclaration',
              specifiers: [ {
                type: 'ImportDefaultSpecifier',
                local: { type: 'Identifier', name: ResourceName },
              } ],
              source: {
                type: 'Literal',
                value: `./${resource_name}/reducers`,
              }
            })
          }

          const code = ast.body.map((ast_node)=>{
            return escodegen.generate(ast_node, escodegenOption)
          }).join("\n")

          return prettier.format(`${comment}\n${code}`);
        }
      }
    );
    // sagas.js
    const sagas_path = this.destinationPath("frontend/src/customApp/redux/sagas.js");
    this.fs.copy(
      sagas_path,
      sagas_path,
      {
        process: (content) => {
          const script = content.toString();
          const ast = esprima.parseModule(script, { sourceType: 'module'});
          const len = ast.body.length;
          const lastBody = ast.body[len-1];
          // all() のブロック
          const yieldedAllFunc = lastBody.declaration.body.body[0].expression.argument;
          const exporetedSagas = yieldedAllFunc.arguments[0].elements.map((elm)=> elm.callee.name)

          // 再生成を考慮して既にあったら飛ばす
          if( ! exporetedSagas.includes(resourceNameSagas) ){
            // yield allの中身を足す
            const sagasLen = yieldedAllFunc.arguments[0].elements.length;
            yieldedAllFunc.arguments[0].elements.splice(sagasLen, 0, {
              type: 'CallExpression',
              callee: {
                type: 'Identifier',
                name: resourceNameSagas,
              },
              arguments: []
            })

            // import句を足す
            ast.body.splice(2, 0,{
              type: 'ImportDeclaration',
              specifiers: [ {
                type: 'ImportDefaultSpecifier',
                local: { type: 'Identifier', name: resourceNameSagas },
              } ],
              source: {
                type: 'Literal',
                value: `./${resource_name}/sagas`,
              }
            })
          }

          const code = ast.body.map((ast_node)=>{
            return escodegen.generate(ast_node, escodegenOption)
          }).join("\n")

          return prettier.format(`${comment}\n${code}`);
        }
      }
    );

    // router.js
    const router_path = this.destinationPath("frontend/src/customApp/router.js");
    this.fs.copy(
      router_path,
      router_path,
      {
        process: (content) => {
          const script = content.toString();
          const ast = esprima.parseModule(script, { sourceType: 'module'});
          const len = ast.body.length;
          const routesAst = ast.body[len-2];

          const elements = routesAst.declarations[0].init.elements;
          elements.push({
            "type": "SpreadElement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "restRoutes"
              },
              "arguments": [{
                "type": "Literal",
                "value": urlbase,
              }, {
                "type": "Literal",
                "value": ResourceName,
              }]
            }
          })
          const code = ast.body.map((ast_node)=>{
            return escodegen.generate(ast_node, escodegenOption)
          }).join("\n")

          return prettier.format(`${comment}\n${code}`);
        }
      }
    );

    // sidebar.js
    const sidebar_path = this.destinationPath("frontend/src/customApp/sidebar.js");
    this.fs.copy(
      sidebar_path,
      sidebar_path,
      {
        process: (content) => {
          const script = content.toString();
          const ast = esprima.parseModule(script, { sourceType: 'module'});
          const optionsAst = ast.body[0];
          const elements = optionsAst.declarations[0].init.elements;
          elements.push({
            "type": "ObjectExpression",
            "properties": [{
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "key"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": urlbase,
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }, {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "label"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": `${resourceName}.sidebar`,
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }, {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "leftIcon"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": "ion-android-checkbox-outline",
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }]
          })
          const code = ast.body.map((ast_node)=>{
            return escodegen.generate(ast_node, escodegenOption)
          }).join("\n")

          return prettier.format(`${comment}\n${code}`);
        }
      }
    );


    // en_US.json
    const en_US_path = this.destinationPath("frontend/src/languageProvider/locales/en_US.json");
    this.fs.copy(
      en_US_path,
      en_US_path,
      {
        process: (content) => {
          let json = JSON.parse(content.toString());

          json[`${resourceName}.sidebar`] = `${titleCase(resourceName)} Management`
          json[`${resourceName}.name`] = titleCase(resourceName),
          columns.map((column)=>{
            json[`${resourceName}.attributes.${column}`] = titleCase(column)
          });

          // jsonをキーで辞書ソート
          json = Object.entries(json).sort().reduce( (o,[k,v]) => (o[k]=v,o), {} )

          // 1000は改行する文字数。translate用のjsonは改行したくないので大きめの数字にしています。
          return jsonBeautify(json, null, 2, 1000);
        }
      }
    );

    // ja_JP.json
    const ja_JP_path = this.destinationPath("frontend/src/languageProvider/locales/ja_JP.json");
    this.fs.copy(
      ja_JP_path,
      ja_JP_path,
      {
        process: (content) => {
          let json = JSON.parse(content.toString());

          json[`${resourceName}.sidebar`] = `${jaName}管理`
          json[`${resourceName}.name`] = jaName,
          columns.map((column)=>{
            json[`${resourceName}.attributes.${column}`] = jaColumns[column]
          });

          // jsonをキーで辞書ソート
          json = Object.entries(json).sort().reduce( (o,[k,v]) => (o[k]=v,o), {} )

          // 1000は改行する文字数。translate用のjsonは改行したくないので大きめの数字にしています。
          return jsonBeautify(json, null, 2, 1000);
        }
      }
    );
  }

};
