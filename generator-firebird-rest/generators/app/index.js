'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const {camelCase, snakeCase, constantCase, pascalCase} = require('change-case');
const pluralize =  require('pluralize');
const esprima = require('esprima');
const escodegen = require('escodegen');

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
      message: 'APIエンドポイントを入力してください',
      default: (props)=> pluralize(props.name),
    }]);

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
    const files = [
      'src/customApp/redux/_resource_name_/entity/actions.js',
      'src/customApp/redux/_resource_name_/entity/reducer.js',
      'src/customApp/redux/_resource_name_/entity/saga.js',
      'src/customApp/redux/_resource_name_/list/actions.js',
      'src/customApp/redux/_resource_name_/list/reducer.js',
      'src/customApp/redux/_resource_name_/list/saga.js',
      'src/customApp/redux/_resource_name_/reducers.js',
      'src/customApp/redux/_resource_name_/sagas.js',
    ];

    for( const i in files ){
      const file = files[i];
      const dest = "frontend/" + file.replace('_resource_name_', resource_name);
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
            return escodegen.generate(ast_node)
          }).join("\n")

          const comment = "// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください";
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
            return escodegen.generate(ast_node)
          }).join("\n")

          const comment = "// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください";
          return `${comment}\n${code}`;
        }
      }
    );
  }

  install() {
    // this.installDependencies();
  }
};
