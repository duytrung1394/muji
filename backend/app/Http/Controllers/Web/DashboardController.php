<?php

namespace App\Http\Controllers\Web;

class DashboardController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {

    }

    /**
     * @return \Illuminate\View\View
     */
    public function showIndex() {

        $view_data = [];

        // ログインエラーの場合
        /*
        $url = '/';
        header("Location: {$url}");
        exit;
        */

        return view('index', $view_data);

    }

    //
}

// EOF