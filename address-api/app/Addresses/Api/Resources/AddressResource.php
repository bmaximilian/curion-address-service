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
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $last_name
 * @property string $first_name
 * @property string $address
 * @property string $postal_code
 * @property string $city
 * @property string $birthday
 * @property-read \App\Addresses\Database\Models\Salutation|null $salutation
 * @package App\Addresses\Api\Resources
 */
class AddressResource extends JsonResource {
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
            'createdAt' => $this->created_at,
            'updatedAt'=> $this->updated_at,
            'salutation' => $this->salutation->key,
            'firstName' => $this->first_name,
            'lastName' => $this->last_name,
            'address' => $this->address,
            'postalCode' => $this->postal_code,
            'city' => $this->city,
            'birthday' => $this->birthday,
        ];
    }
}
