const yesno = require("yesno");

module.exports = shipit => {
  shipit.initConfig({
    default: {
      cwd: "/home/admin/muji-ec"
    },
    dev: {
      branch: "develop",
      servers: [
        {
          user: "admin",
          host: "muji-ec.xenophy.info"
        }
      ]
    },
    release: {
      // 後で変更する？
      branch: 'master',
      servers: [{
        user: 'admin',
        host: 'muji-ec-release.xenophy.info'
      }]
    }
  });

  const r = async cmd => {
    // cwd(カレントディレクトリ)オプションを常に渡すために関数で包む
    const { cwd } = shipit.config;

    await shipit.remote(cmd, { cwd });
  };

  // docker-compose での実行をつつむ
  const dc = async dc_cmd => {
    await r(`docker-compose -f production.yml  ${dc_cmd}`);
  };

  const runComposeCommands = async commands => {
    for (let cmd of commands) {
      await dc(cmd);
    }
  };

  shipit.blTask("deploy:git", async () => {
    const { branch } = shipit.config;

    await shipit.local(`git fetch`);
    const localRev = await shipit.local(`git rev-parse ${branch}`);
    const originRev = await shipit.local(`git rev-parse origin/${branch}`);
    if (localRev.stdout !== originRev.stdout) {
      const result = await yesno.askAsync(
        "ローカルの最新コミットがGitの最新版と異なるようです。 デプロイをこのまま実行しますか？ (y/n)",
        true
      );
      if (result === false) {
        throw "Noが選択されました";
      }
    }
    await r(`git checkout ${branch}`);
    await r("git pull");
  });

  shipit.blTask("deploy:backend", async () => {
    shipit.log("backend 環境整備開始");
    await dc("build backend");
    await runComposeCommands([
      "run --rm backend composer install",
      "run --rm backend php artisan migrate:refresh",
      "run --rm backend composer dump-autoload",
      "run --rm backend php artisan db:seed",
      "up -d backend"
    ]);
    shipit.log("backend 立ち上げ完了");
  });

  shipit.blTask("deploy:frontend", async () => {
    shipit.log("frontend 環境整備開始");
    await dc("build frontend");
    await runComposeCommands([
      "run --rm frontend yarn install",
      "run --rm frontend yarn build",
      "up -d frontend"
    ]);
    shipit.log("frontend 立ち上げ完了");
  });

  shipit.blTask("deploy:nginx", async () => {
    shipit.log("nginx 立ち上げ開始");
    await dc("build nginx");
    await runComposeCommands(["up -d nginx"]);
    shipit.log("nginx 立ち上げ完了");
  });

  shipit.task("deploy", async () => {
    shipit.start("deploy:git");
    shipit.start("deploy:frontend");
  });

  shipit.task("deploy:all", async () => {
    shipit.start("deploy:git");
    shipit.start("deploy:backend");
    shipit.start("deploy:frontend");
    shipit.start("deploy:nginx");
  });
};
