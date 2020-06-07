<?php
/**
 * Created on 06.06.20.
 *
 * @author Maximilian Beck <contact@maximilianbeck.de>
 */

namespace App\Http\Exceptions;

use Tymon\JWTAuth\Exceptions\JWTException;

/**
 * Class ForbiddenException
 *
 * @package App\Http\Exceptions
 */
class ForbiddenException {
    /**
     * @var JWTException
     */
    private $exception;

    public function __construct(JWTException $exception) {
        $this->exception = $exception;
    }

    /**
     * Transform the exception into an array.
     *
     * @return array - The transformed json
     */
    public function toArray(): array
    {
        $isDebug = config('app.debug', false);

        $payload = [
            'message' => "Forbidden Resource",
            'status' => 403,
        ];

        if ($isDebug) {
            $payload['details'] = $this->exception->getMessage();
        }

        return $payload;
    }
}
