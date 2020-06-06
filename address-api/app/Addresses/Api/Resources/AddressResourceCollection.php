<?php
/**
 * Created on 06.06.20.
 *
 * @author Maximilian Beck <contact@maximilianbeck.de>
 */

namespace App\Addresses\Api\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class AddressResourceCollection
 *
 * @OA\Schema(
 *     title="AddressResourceCollection",
 *     description="Address resource collection",
 *     type="object",
 *     required={"data"},
 *     @OA\Xml(
 *         name="AddressResourceCollection"
 *     )
 * )
 * @OA\Property(
 *     title="Data",
 *     property="data",
 *     description="Address collection",
 *     type="array",
 *      @OA\Items(
 *          ref="#/components/schemas/AddressResource",
 *      ),
 * )
 *
 * @property AddressResource[] $data
 *
 * @package App\Addresses\Api\Resources
 */
class AddressResourceCollection extends ResourceCollection
{

}
