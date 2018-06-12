<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\Controller as BaseController;

class Controller extends BaseController {
    private function getRecursiveMap($rule, $map) {

        $rules = explode('.', $rule);

        if (sizeof($rules) === 1) {

            if (isset($map[ $rule ])) {
                return $map[ $rule ];
            }

        } else {

            $parent = $rules[ 0 ];
            array_shift($rules);

            if (isset($map[ $parent ])) {
                return $this->getRecursiveMap(implode('.', $rules), $map[ $parent ]);
            }

        }

        return 59999;
    }

    protected function ruleToCode($rule) {

        return $this->getRecursiveMap(strtolower($rule), require resource_path() . '/validation_error_code.php');

    }

    protected function getMetaValidationError($validator) {

        $errors = [];
        $fields = [];

        foreach ($validator->failed() as $field => $failed) {
            foreach ($failed as $rule => $params) {

                if (!isset($fields[ $field ])) {
                    $fields[ $field ] = 0;
                } else {
                    $fields[ $field ]++;
                }

                $field_count = $fields[ $field ];

                $errors[] = [
                    'code' => $this->ruleToCode($rule),
                    'field' => $field,
                    'message' => $validator->errors()->messages()[ $field ][ $field_count ],
                ];
            }
        }

        return $errors;
    }

    protected function abort400($validator) {

        $code = 400;

        return response()->json([
            'error' => $code,
            'message' => 'Bad Request',
            'meta' => [
                'errors' => $this->getMetaValidationError($validator)
            ]
        ], $code);

    }

}

// EOF