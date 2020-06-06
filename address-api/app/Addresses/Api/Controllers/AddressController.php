<?php

namespace App\Addresses\Api\Controllers;

use App\Addresses\Api\Resources\AddressResource;
use App\Addresses\Api\Resources\AddressResourceCollection;
use App\Addresses\Database\Repositories\AddressRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class AddressController
 *
 * @OA\Tag(
 *     name="Address",
 *     description="API Endpoints of Address"
 * )
 *
 * @package App\Addresses\Api\Controllers
 */
class AddressController extends Controller
{
    /**
     * @var AddressRepository
     */
    private $addressRepository;

    public function __construct(AddressRepository $addressRepository) {
        $this->addressRepository = $addressRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @OA\Get(
     *      path="/api/v1/addresses",
     *      operationId="index",
     *      tags={"Address"},
     *      summary="Get list of addresses",
     *      description="Returns list of addresses",
     *      security={{ "bearerAuth": {} }},
     *      @OA\Response(
     *          response=200,
     *          description="successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/AddressResourceCollection"),
     *       ),
     *     )
     *
     * @return ResourceCollection - A collection of addresses
     */
    public function index(): ResourceCollection
    {
        $addresses = $this->addressRepository->findAll();

        return new AddressResourceCollection($addresses);
    }

    /**
     * Display the specified resource.
     *
     * @OA\Get(
     *      path="/api/v1/addresses/{id}",
     *      operationId="show",
     *      tags={"Address"},
     *      summary="Get address details",
     *      description="Returns an address by id",
     *      security={{ "bearerAuth": {} }},
     *      @OA\Parameter(
     *          name="id",
     *          description="Address id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/AddressResource"),
     *       ),
     *      @OA\Response(response=404, description="Resource Not Found"),
     *     )
     *
     * @param  string  $id
     * @return JsonResource
     */
    public function show(string $id): JsonResource
    {
        $address = $this->addressRepository->findById($id);

        return new AddressResource($address);
    }
}
