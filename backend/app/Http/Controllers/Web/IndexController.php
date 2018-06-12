<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;

class IndexController extends Controller {

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
    public function showIndex(Request $request) {
        $view_data = [];

        return view('index', $view_data);

    }

    //
}

// EOF