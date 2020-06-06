<?php

namespace App\Addresses\Api\Resources;

use App\Addresses\Database\Models\Salutation;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class AddressResource
 *
 * @OA\Schema(
 *     title="AddressResource",
 *     description="Address resource",
 *     type="object",
 *     required={"id","lastName","salutation"},
 *     @OA\Xml(
 *         name="AddressResource"
 *     )
 * )
 * @OA\Property(
 *      title="id",
 *      property="id",
 *      description="Id of the address",
 *      format="int64",
 *      example="1",
 * )
 * @OA\Property(
 *      title="createdAt",
 *      property="createdAt",
 *      description="When the addres was created",
 *      example="2020-06-06T16:28:28.070000Z",
 *      format="datetime",
 *      type="string"
 * )
 * @OA\Property(
 *      title="updatedAt",
 *      property="updatedAt",
 *      description="When the addres was updated last",
 *      example="2020-06-06T16:28:28.070000Z",
 *      format="datetime",
 *      type="string"
 * )
 * @OA\Property(
 *      title="firstName",
 *      property="firstName",
 *      description="First name of the person",
 *      example="Max",
 *      type="string"
 * )
 * @OA\Property(
 *      title="lastName",
 *      property="lastName",
 *      description="Last name of the person",
 *      example="Mustermann",
 *      type="string"
 * )
 * @OA\Property(
 *      title="address",
 *      property="address",
 *      description="Street and house nr.",
 *      example="Barthelring 4c",
 *      type="string"
 * )
 * @OA\Property(
 *      title="postalCode",
 *      property="postalCode",
 *      description="Postal code",
 *      example="71338",
 *      type="string"
 * )
 * @OA\Property(
 *      title="city",
 *      property="city",
 *      description="City",
 *      example="Leipzig",
 *      type="string"
 * )
 * @OA\Property(
 *      title="birthday",
 *      property="birthday",
 *      description="Birthday of the person",
 *      example="2017-08-13T00:00:00.000000Z",
 *      type="string",
 *      format="datetime",
 * )
 * @OA\Property(
 *      title="salutation",
 *      property="salutation",
 *      description="Salutation of the person",
 *      example="mr",
 *      type="string",
 * )
 *
 * @property int $id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string $last_name
 * @property string $first_name
 * @property string $address
 * @property string $postal_code
 * @property string $city
 * @property string $birthday
 * @property-read Salutation|null $salutation
 *
 * @package App\Addresses\Api\Resources
 */
class AddressResource extends JsonResource
{
    public static $wrap = '';

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
