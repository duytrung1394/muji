'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const {camelCase, snakeCase, constantCase, pascalCase} = require('change-case');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the marvelous ${chalk.red('generator-firebird-rest')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'リソース名を入力してください',
        default: 'task'
      }
    ];

    const props = await this.prompt(prompts)
    this.props = props;
  }

  writing() {
    const rawname = this.props.name;
    const resource_name = snakeCase(rawname);
    const resourceName = camelCase(rawname);
    const RESOURCE_NAME = constantCase(rawname);
    const ResourceName = pascalCase(rawname);
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
        }
      );
    }

  }

  install() {
    // this.installDependencies();
  }
};
