<?php

use App\Permission;
use App\Role;
use App\User;
use App\App;
use Illuminate\Database\Seeder;
use Zizaco\Entrust\Entrust;

class AppsSeeder extends Seeder {

    /**
     * アプリ
     *
     * @var array アプリ定義
     */
    protected $apps = [

        // les Lizz
        [
            'name' => 'leslizz',
            'formal_name' => 'les Lizz',
            'ios_released' => '1.0.2',
            'android_released' => '1.0.1',
        ],

        // KNZ FC
        [
            'name' => 'knzfc',
            'formal_name' => 'KNZ FC',
            'ios_released' => '1.0.0',
            'android_released' => '1.0.0',
        ],

        // カブキン倶楽部
        [
            'name' => 'kabukin_club',
            'formal_name' => 'カブキン倶楽部',
            'ios_released' => '1.0.0',
            'android_released' => '1.0.0',
        ]
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        // アプリ定義
        foreach ($this->apps as $app) {
            $appItem = new App;

            foreach (array_keys($app) as $name) {
                $appItem->{$name} = $app[ $name ];
            }

            $appItem->save();
        }

    }

}

// EOF