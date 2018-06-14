'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const {camelCase, snakeCase, constantCase, pascalCase} = require('change-case');
const pluralize =  require('pluralize');
const esprima = require('esprima');
const escodegen = require('escodegen');

const escodegenOption = {
  option: {
    format: {
      indent: {
        style: '  '
      }
    }
  }
};
const comment = "// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください";

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the marvelous ${chalk.red('generator-firebird-rest')} generator!`)
    );

    const props = await this.prompt([{
      type: 'input',
      name: 'name',
      message: 'reduxにおけるリソース名を入力してください',
      default: 'task',
    },
    {
      type: 'input',
      name: 'endpoint',
      message: 'APIのエンドポイントを入力してください',
      default: (props)=> pluralize(props.name),
    },
    {
      type: 'input',
      name: 'urlbase',
      message: 'ブラウザからアクセスするURLのベース部を入力してください',
      default: (props)=> pluralize(props.name),
    }
  ]);

    if(props.name == "shared"){
      throw "名前をsharedにすることは出来ません";
    }

    this.props = props;
  }

  writing() {
    const rawname = this.props.name;
    const endpoint = this.props.endpoint;
    const resource_name = snakeCase(rawname);
    const resourceName = camelCase(rawname);
    const RESOURCE_NAME = constantCase(rawname);
    const ResourceName = pascalCase(rawname);
    const resourceNameSagas = `${resourceName}Sagas`;
    const urlbase = this.props.urlbase;
    const entityFiles = ['actions.js','reducer.js','saga.js'].map(name =>
      'src/customApp/redux/_resource_name_/entity/' + name
    );
    const listFiles = ['actions.js','reducer.js','saga.js'].map(name =>
      'src/customApp/redux/_resource_name_/list/' + name
    );
    const combineFiles = ['reducers.js','sagas.js'].map(name =>
      'src/customApp/redux/_resource_name_/' + name
    );
    const containerFiles = ['edit.js','form.js','index.js','new.js','show.js'].map(name =>
      'src/customApp/containers/_ResourceName_/' + name
    )
    const files = [
      ...entityFiles,
      ...listFiles,
      ...combineFiles,
      ...containerFiles,
    ];

    for( const i in files ){
      const file = files[i];
      const dest = "frontend/" + file.replace('_resource_name_', resource_name).replace('_ResourceName_', ResourceName);
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(dest),
        {
          rawname,
          resource_name,
          RESOURCE_NAME,
          resourceName,
          ResourceName,
          endpoint,
          urlbase,
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

          return `${comment}\n${code}`;
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

          return `${comment}\n${code}`;
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

          return `${comment}\n${code}`;
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
                "value": `sidebar.${resource_name}`,
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

          return `${comment}\n${code}`;
        }
      }
    );
  }

};
