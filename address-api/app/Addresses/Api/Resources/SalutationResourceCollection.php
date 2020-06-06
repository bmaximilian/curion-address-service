<?php
/**
 * Created on 06.06.20.
 *
 * @author Maximilian Beck <contact@maximilianbeck.de>
 */

namespace App\Addresses\Api\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class SalutationResourceCollection
 *
 * @OA\Schema(
 *     title="SalutationResourceCollection",
 *     description="Salutation resource collection",
 *     type="object",
 *     required={"data"},
 *     @OA\Xml(
 *         name="SalutationResourceCollection"
 *     )
 * )
 * @OA\Property(
 *     title="Data",
 *     property="data",
 *     description="Salutation collection",
 *     type="array",
 *      @OA\Items(
 *          ref="#/components/schemas/SalutationResource",
 *      ),
 * )
 *
 * @package App\Addresses\Api\Resources
 */
class SalutationResourceCollection extends ResourceCollection
{

}
