<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Laravel\Lumen\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        AuthorizationException::class,
        HttpException::class,
        ModelNotFoundException::class,
        ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $e
     * @return void
     */
    public function report(Exception $e)
    {
        parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $e)
    {

        try {

            if ($request->is('ajax/*') || $request->is('api/*') || $request->ajax()) {

                if ($e instanceof HttpException) {

                    $status = $e->getStatusCode();

                    return response()->json([
                        'status' => $status,
                        'errors' => $e->getMessage()
                    ], $status);
                }
            }

            /**
             * バリデーション例外
             */
            if ($e instanceof \Illuminate\Validation\ValidationException) {

                /*attributeを多次元配列化して返却*/
                $errors = [];

                foreach ($e->validator->messages()->getMessages() as $attribute => $messages) {

                    array_set($errors, $attribute, $messages);
                }

                return response([
                    'status'    => 422,
                    'message'   => 'Bad Request',
                    'errors'    => $errors,
                ], 422);
            }

            return parent::render($request, $e);

        } catch (Exception $innerException) {

            parent::report($innerException);
            return parent::render($request, $innerException);
        }
    }
}
