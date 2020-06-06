<?php

namespace App\Addresses\Api\Controllers;

use App\Addresses\Api\Resources\SalutationResource;
use App\Addresses\Database\Repositories\SalutationRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\ResourceCollection;

class SalutationController extends Controller
{
    /**
     * @var SalutationRepository
     */
    private $salutationRepository;

    public function __construct(SalutationRepository $salutationRepository) {
        $this->salutationRepository = $salutationRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return ResourceCollection - The requested salutations
     */
    public function index(): ResourceCollection
    {
        $salutations = $this->salutationRepository->findAll();

        return SalutationResource::collection($salutations);
    }
}
