<?php

namespace Deployer;

// ---- Requires

require 'recipe/common.php';

// ---- /Requires


// ---- Settings

// Hosts
//inventory('config/hosts.yml');

// Project name
set('application', 'muji-admin.xenophy.info');

// Project repository
set('repository', 'https://kotsutsumi:eQDy4vTdjfqbC6QusP9a@xenophy.info:9090/xenophy/muji.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Laravel shared dirs
set('shared_dirs', [
    'storage',
]);
// Laravel shared file
set('shared_files', [
    '.env',
]);


// Laravel writable dirs
set('writable_dirs', [
    'backend/bootstrap/cache',
    'backend/storage',
    'backend/storage/app',
    'backend/storage/app/public',
    'backend/storage/framework',
    'backend/storage/framework/cache',
    'backend/storage/framework/sessions',
    'backend/storage/framework/views',
    'backend/storage/logs'
]);
set('writable_files', [
]);
set('writable_mode', 'chmod');
set('writable_chmod_mode', 777);
set('writable_dirs_recursive', true);

set('laravel_version', function () {
    $result = run('{{bin/php}} {{release_path}}/backend/artisan --version');
    preg_match_all('/(\d+\.?)+/', $result, $matches);
    $version = $matches[ 0 ][ 0 ] ?? 5.5;
    return $version;
});

// ---- /Settings

desc('Installing vendors');
task('deploy:vendors', function () {
    if (!commandExist('unzip')) {
        writeln('<comment>To speed up composer installation setup "unzip" command with PHP zip extension https://goo.gl/sxzFcD</comment>');
    }
    run('cd {{release_path}}/backend && {{bin/composer}} {{composer_options}}');
});

// ---- Helper tasks

desc('Disable maintenance mode');
task('artisan:up', function () {
    $output = run('if [ -f {{deploy_path}}/current/backend/artisan ]; then {{bin/php}} {{deploy_path}}/current/backend/artisan up; fi');
    writeln('<info>' . $output . '</info>');
});
desc('Enable maintenance mode');
task('artisan:down', function () {
    $output = run('if [ -f {{deploy_path}}/current/backend/artisan ]; then {{bin/php}} {{deploy_path}}/current/backend/artisan down; fi');
    writeln('<info>' . $output . '</info>');
});
desc('Execute artisan migrate');
task('artisan:migrate', function () {
    run('{{bin/php}} {{release_path}}/backend/artisan migrate --force');
});
desc('Execute artisan migrate:fresh');
task('artisan:migrate:fresh', function () {
    run('{{bin/php}} {{release_path}}/backend/artisan migrate:fresh --force');
});
desc('Execute artisan migrate:rollback');
task('artisan:migrate:rollback', function () {
    $output = run('{{bin/php}} {{release_path}}/backend/artisan migrate:rollback --force');
    writeln('<info>' . $output . '</info>');
});
desc('Execute artisan migrate:status');
task('artisan:migrate:status', function () {
    $output = run('{{bin/php}} {{release_path}}/backend/artisan migrate:status');
    writeln('<info>' . $output . '</info>');
});
desc('Execute artisan db:seed');
task('artisan:db:seed', function () {
    $output = run('{{bin/php}} {{release_path}}/backend/artisan db:seed --force');
    writeln('<info>' . $output . '</info>');
});
desc('Execute artisan cache:clear');
task('artisan:cache:clear', function () {
    run('{{bin/php}} {{release_path}}/backend/artisan cache:clear');
});
desc('Execute artisan config:cache');
task('artisan:config:cache', function () {
    run('{{bin/php}} {{release_path}}/backend/artisan config:cache');
});
desc('Execute artisan route:cache');
task('artisan:route:cache', function () {
    run('{{bin/php}} {{release_path}}/backend/artisan route:cache');
});
desc('Execute artisan view:clear');
task('artisan:view:clear', function () {
    run('{{bin/php}} {{release_path}}/backend/artisan view:clear');
});
desc('Execute artisan optimize');
task('artisan:optimize', function () {
    $deprecatedVersion = 5.5;
    $currentVersion = get('laravel_version');
    if (version_compare($currentVersion, $deprecatedVersion, '<')) {
        run('{{bin/php}} {{release_path}}/backend/artisan optimize');
    }
});
desc('Execute artisan queue:restart');
task('artisan:queue:restart', function () {
    run('{{bin/php}} {{release_path}}/backend/artisan queue:restart');
});
desc('Execute artisan storage:link');
task('artisan:storage:link', function () {
    $needsVersion = 5.3;
    $currentVersion = get('laravel_version');
    if (version_compare($currentVersion, $needsVersion, '>=')) {
        run('{{bin/php}} {{release_path}}/backend/artisan storage:link');
    }
});

/**
 * Task deploy:public_disk support the public disk.
 * To run this task automatically, please add below line to your deploy.php file
 *
 *     before('deploy:symlink', 'deploy:public_disk');
 *
 * @see https://laravel.com/docs/5.2/filesystem#configuration
 */
desc('Make symlink for public disk');
task('deploy:public_disk', function () {
    // Remove from source.
    run('if [ -d $(echo {{release_path}}/public/storage) ]; then rm -rf {{release_path}}/public/storage; fi');
    // Create shared dir if it does not exist.
    run('mkdir -p {{deploy_path}}/shared/storage/app/public');
    // Symlink shared dir to release dir
    run('{{bin/symlink}} {{deploy_path}}/shared/storage/app/public {{release_path}}/public/storage');
});

desc('Make symlink for .env file');
task('deploy:symlink:env', function () {
    run('ln -s {{data_path}}/.env {{release_path}}/backend/.env');
});

desc('Run composer dump-autoload');
task('deploy:composer:dump-autoload', function () {
    run('cd {{release_path}}/backend && {{bin/composer}} dump-autoload');
});

desc('Make symlink for storage disk');
task('deploy:symlink:storage', function () {
    run('rm -Rf {{release_path}}/backend/storage');
    run('ln -s {{data_path}} {{release_path}}/backend/storage');
});

desc('Restart php-fpm');
task('deploy:restart:php-fpm', function () {
    run('sudo systemctl stop php-fpm; sudo systemctl start php-fpm;');
});

task('deploy:writable:files', function () {
    $files = join(' ', get('writable_files'));
    $sudo = get('writable_use_sudo') ? 'sudo' : '';

    if (empty($files)) {
        return;
    }

   // run("$sudo chmod -R 777 {{release_path}}/$files");
})->desc('Make writable files');

// ---- /Helper tasks


// ---- Main task

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:vendors',
    'deploy:writable',
    'deploy:symlink:env',
    'deploy:symlink:storage',
    //'artisan:view:clear',
    'artisan:cache:clear',
    //'artisan:config:cache',
    'artisan:optimize',
    'deploy:symlink',
    'deploy:unlock',
    'deploy:writable:files',
    'deploy:composer:dump-autoload',
    'cleanup',
    'deploy:restart:php-fpm',
]);
after('deploy', 'success');

// ---- /Main task


// ---- Hosts

host('staging')
    ->hostname('muji-admin.xenophy.info')
    ->user('deployer')
    ->addSshOption('UserKnownHostsFile', '/dev/null')
    ->addSshOption('StrictHostKeyChecking', 'no')
    ->set('branch', 'admin-work')
    ->set('deploy_path', '/share/muji-admin')
    ->set('data_path', '/share/data');

// ---- /Hosts

# EOF
