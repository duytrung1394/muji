<?php

declare(strict_types=1);

namespace App\Services;

class StubApiService
{
    /**
     * request.
     *
     * @return array
     */
    public function request(string $method, string $url)
    {

        $client = new \GuzzleHttp\Client([
            'base_uri' => 'http://stubapi:8000',
        ]);

        $response = $client->request(
            $method,
            $url,
            [
                'headers' => [
                    'Accept'        => 'application/json',
                    'content-type'  => 'application/json',
                ]
            ]
        );

        return json_decode($response->getBody()->getContents());
    }

    /**
     * get request
     */
    public function get(string $url)
    {
        return $this->request('get', $url);
    }
    /**
     * post request
     */
    public function post(string $url)
    {
        return $this->request('post', $url);
    }
    /**
     * put request
     */
    public function put(string $url)
    {
        return $this->request('put', $url);
    }
    /**
     * delete request
     */
    public function delete(string $url)
    {
        return $this->request('delete', $url);
    }
}
