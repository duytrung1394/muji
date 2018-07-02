<?php

use App\Permission;
use App\Role;
use App\User;
use Illuminate\Database\Seeder;
use Zizaco\Entrust\Entrust;

class UsersSeeder extends Seeder {

    /**
     * ユーザー
     *
     * @var array ユーザー定義
     */
    protected $users = [
        [
            'username' => 'kotsutsumi@xenophy.com',
            'password' => '1234',
            'roles' => [
                'admin',
                'leslizz_admin',
                'knzfc_admin',
                'kabukin_club_admin'
            ]
        ]

    ];

    /**
     * ロール
     *
     * @var array ロール定義
     */
    protected $roles = [

        // アドミニストレーターロール
        [
            'name' => 'admin',
            'display_name' => 'Administrator',
            'description' => 'User is allowed to manage system.'
        ],

        // les Lizz
        [
            'name' => 'leslizz_admin',
            'display_name' => 'les Lizz Administrator',
            'description' => 'User is allowed to manage "les Lizz" app.'
        ],

        // KNZ FC
        [
            'name' => 'knzfc_admin',
            'display_name' => 'KNZ FC Administrator',
            'description' => 'User is allowed to manage "knzfc" app.'
        ],

        // Kabukin Club
        [
            'name' => 'kabukin_club_admin',
            'display_name' => 'Kabukin Club Administrator',
            'description' => 'User is allowed to manage "kabukin_club" app.'
        ],

    ];

    /**
     * パーミッション
     *
     * @var array パーミッション定義
     */
    protected $permissions = [

        // アドミニストレーターパーミッション
        'admin' => [

            /*
            // メンテナンスモード切替
            [
                'name' => 'switch maintenance mode',
                'display_name' => 'Switch Maintenance Mode',
                'description' => 'User is allowed to switch maintenance mode.'
            ]
            */

        ],

        // les Lizz アドミニストレーターパーミッション
        'leslizz_admin' => [

            // メンテナンスモード切替
            [
                'name' => 'les lizz switch maintenance mode',
                'display_name' => '"les Lizz" Switch Maintenance Mode',
                'description' => 'User is allowed to switch "les Lizz" maintenance mode.'
            ]

        ],

        // KNZ FC アドミニストレーターパーミッション
        'knzfc_admin' => [

            // メンテナンスモード切替
            [
                'name' => 'KNZ FC switch maintenance mode',
                'display_name' => '"KNZ FC" Switch Maintenance Mode',
                'description' => 'User is allowed to switch "KNZ FC" maintenance mode.'
            ]

        ],

        // Kabukin Club アドミニストレーターパーミッション
        'kabukin_club_admin' => [

            // メンテナンスモード切替
            [
                'name' => 'Kabukin Club switch maintenance mode',
                'display_name' => '"Kabukin Club" Switch Maintenance Mode',
                'description' => 'User is allowed to switch "Kabukin Club" maintenance mode.'
            ]

        ]

    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        // ロール定義
        foreach ($this->roles as $role) {

            $roleItem = new Role();

            foreach (array_keys($role) as $name) {
                $roleItem->{$name} = $role[ $name ];
            }

            $roleItem->save();

            // パーミッション定義
            foreach ($this->permissions[ $role[ 'name' ] ] as $permission) {

                $parmissionItem = new Permission();

                foreach (array_keys($permission) as $name) {
                    $parmissionItem->{$name} = $permission[ $name ];
                }

                $parmissionItem->save();

                // ロールにパーミッションをアタッチ
                $roleItem->attachPermission([$parmissionItem]);
            }

        }

        // ユーザー作成
        foreach ($this->users as $user) {

            $userItem = new User;

            $userItem->username = $user[ 'username' ];
            $userItem->password = hash('sha512', $user[ 'password' ] . User::$salt);
            $userItem->api_token = '';
            $userItem->save();

            foreach ($user[ 'roles' ] as $roleName) {

                $roleItem = Role::where('name', $roleName)->first();

                if (!is_null($roleItem)) {

                    // ユーザーにロールをアタッチ
                    $userItem->attachRole($roleItem);
                }

            }

        }

        for ($i = 1; $i < 123; $i++) {
            $userItem = new User;

            $userItem->username = 'test' . $i . '@test.com';
            $userItem->password = hash('sha512', '1234' . User::$salt);
            $userItem->first_name = '太郎' . $i;
            $userItem->last_name = 'テスト';
            $userItem->api_token = '';
            $userItem->save();

            $roles = [
                'admin',
                'leslizz_admin',
                'knzfc_admin',
                'kabukin_club_admin'
            ];

            foreach ($roles as $roleName) {

                $roleItem = Role::where('name', $roleName)->first();

                if (!is_null($roleItem)) {

                    // ユーザーにロールをアタッチ
                    $userItem->attachRole($roleItem);
                }

            }
        }

    }
}

// EOF