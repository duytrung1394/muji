<?php

namespace App;

use Zizaco\Entrust\EntrustPermission;

class Permission extends EntrustPermission {

    /**
     * ロール取得メソッド
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany ロール一覧
     */
    public function roles() {
        return $this->belongsToMany('App\Role');
    }

}

// EOF