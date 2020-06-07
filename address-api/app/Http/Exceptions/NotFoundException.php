<?php
/**
 * Created on 06.06.20.
 *
 * @author Maximilian Beck <contact@maximilianbeck.de>
 */

namespace App\Http\Exceptions;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class NotFoundException
 *
 * @package App\Http\Exceptions
 */
class NotFoundException {
    /**
     * @var ModelNotFoundException
     */
    private $exception;

    public function __construct(ModelNotFoundException $exception) {
        $this->exception = $exception;
    }

    /**
     * Transform the exception into an array.
     *
     * @return array - The transformed json
     */
    public function toArray(): array
    {
        $model = substr($this->exception->getModel(), strrpos($this->exception->getModel(), '\\') + 1);
        $id = $this->exception->getIds()[0];

        return [
            'message' => "Could not find $model with id $id",
            'status' => 404,
        ];
    }
}
