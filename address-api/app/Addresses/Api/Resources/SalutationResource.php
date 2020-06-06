<?php
/**
 * Created on 06.06.20.
 *
 * @author Maximilian Beck <contact@maximilianbeck.de>
 */

namespace App\Addresses\Api\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class SalutationResource
 *
 * @property int $id
 * @property string $key
 * @property string $created_at
 * @property string $updated_at
 * @package App\Addresses\Api\Resources
 */
class SalutationResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     * @param Request $request - The api request
     * @return array - The transformed json
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'key' => $this->key,
        ];
    }
}
