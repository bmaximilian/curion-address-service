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
 * @OA\Schema(
 *     title="SalutationResource",
 *     description="Salutation resource",
 *     type="object",
 *     required={"id","key"},
 *     @OA\Xml(
 *         name="SalutationResource"
 *     )
 * )
 * @OA\Property(
 *      title="id",
 *      property="id",
 *      description="Id of the salutation",
 *      example="1",
 *      format="int64",
 * )
 * @OA\Property(
 *      title="key",
 *      property="key",
 *      description="Salutation key",
 *      example="mr",
 * )
 *
 * @property int $id
 * @property string $key
 * @property string $created_at
 * @property string $updated_at
 * @package App\Addresses\Api\Resources
 */
class SalutationResource extends JsonResource
{

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
