<?php

namespace App\Addresses\Api\Controllers;

use App\Addresses\Api\Resources\AddressResource;
use App\Addresses\Database\Models\Address;
use App\Addresses\Database\Repositories\AddressRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;

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
     * @return ResourceCollection - A collection of addresses
     */
    public function index(): ResourceCollection
    {
        $addresses = $this->addressRepository->findAll();

        return AddressResource::collection($addresses);
    }

    /**
     * Display the specified resource.
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
