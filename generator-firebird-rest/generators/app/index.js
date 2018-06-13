'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

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
    const props = this.props;
    const name = props.name.toLowerCase();
    //TODO: Capitalize name by better npm
    const camelcasedName = name[0].toUpperCase() + name.substring(1);
    const files = [
      'src/customApp/redux/_RESOURCE_/entity/actions.js',
      'src/customApp/redux/_RESOURCE_/entity/reducer.js',
      'src/customApp/redux/_RESOURCE_/entity/saga.js',
      'src/customApp/redux/_RESOURCE_/list/actions.js',
      'src/customApp/redux/_RESOURCE_/list/reducer.js',
      'src/customApp/redux/_RESOURCE_/list/saga.js',
      'src/customApp/redux/_RESOURCE_/reducers.js',
      'src/customApp/redux/_RESOURCE_/sagas.js',
    ];

    for( const i in files ){
      const file = files[i];
      const dest = "frontend/" + file.replace('_RESOURCE_', name);
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(dest),
        {
          name,
          camelcasedName,
        }
      );
    }

  }

  install() {
    // this.installDependencies();
  }
};
