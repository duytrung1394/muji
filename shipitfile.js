const yesno = require('yesno')

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

    await shipit.local(`git fetch`)
    const localRev = await shipit.local(`git rev-parse ${branch}`)
    const originRev = await shipit.local(`git rev-parse origin/${branch}`)
    if( localRev.stdout !== originRev.stdout ){
      const result = await yesno.askAsync('ローカルの最新コミットがGitの最新版と異なるようです。 デプロイをこのまま実行しますか？ (y/n)', true);
      if(result === false){
        throw "Noが選択されました";
      }
    }

    const r = async (cmd) => {
      // cwd(カレントディレクトリ)オプションを常に渡すために関数で包む
      await shipit.remote(cmd, {cwd})
    }

    await r(`git checkout ${branch}`)
    await r('git pull')
    
    // docker-compose での実行をつつむ
    const dc = async (dc_cmd) => {
      await r(`docker-compose -f production.yml  ${dc_cmd}`)
    }

    const runComposeCommands = async (commands) => {
      for(let cmd of commands) {
        await dc(cmd)
      }
    }

    await dc('build backend')
    await dc('build frontend')
    await dc('build nginx')

    console.log('backend 環境整備開始')
    await runComposeCommands([
      'run --rm backend composer install',
      'run --rm backend php artisan migrate:refresh',
      'run --rm backend composer dump-autoload',
      'run --rm backend php artisan db:seed',
      'up -d backend',
    ])
    console.log('backend 立ち上げ完了')

    console.log('frontend 環境整備開始')
    await runComposeCommands([
      'run --rm frontend yarn install',
      'run --rm frontend yarn build',
      'up -d frontend',
    ])
    console.log('frontend 立ち上げ完了')

    console.log('nginx 立ち上げ開始')
    await runComposeCommands([
      'up -d nginx',
    ])
    console.log('nginx 立ち上げ完了')
  });

}
