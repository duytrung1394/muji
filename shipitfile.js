
module.exports = shipit => {
  shipit.initConfig({
    default: {
      cwd: '/home/admin/muji-ec'
    },
    dev: {
      branch: 'release_ssr',
      servers: [{
        user: 'admin',
        host: 'muji-ec.xenophy.info'
      }]
    },
    // release側サーバーの準備が整ったらここも設定する。 今は誤動作防止のためコメントアウト。
    // release: {
    //   // 後で変更する？
    //   branch: 'release_ssr',
    //   servers: [{
    //     user: 'admin',
    //     host: 'muji-ec-release.xenophy.info'
    //   }]
    // }
  });

  shipit.task('deploy', async () => {
    const {
      cwd,
      branch,
    } = shipit.config;

    const r = async (cmd) => {
      // cwd(カレントディレクトリ)オプションを常に渡すために関数で包む
      await shipit.remote(cmd, {cwd})
    }

    r(`git checkout ${branch}`)
    r('git pull')
    
    // docker-compose での実行をつつむ
    const dc = async (dc_cmd) => {
      await r(`docker-compose -f production.yml  ${dc_cmd}`)
    }

    const runComposeCommands = async (commands) => {
      for(let cmd of commands) {
        await dc(cmd)
      }
    }

    dc('build')

    console.log('backend 環境整備開始')
    runComposeCommands([
      'run --rm backend composer install',
      'run --rm backend php artisan migrate:refresh',
      'run --rm backend composer dump-autoload',
      'run --rm backend php artisan db:seed',
      'up -d backend',
    ])
    console.log('backend 立ち上げ完了')

    console.log('frontend 環境整備開始')
    runComposeCommands([
      'run --rm frontend yarn install',
      'run --rm frontend yarn build',
      'up -d frontend',
    ])
    console.log('frontend 立ち上げ完了')

    console.log('nginx 立ち上げ開始')
    runComposeCommands([
      'up -d nginx',
    ])
    console.log('nginx 立ち上げ完了')
  });

}
