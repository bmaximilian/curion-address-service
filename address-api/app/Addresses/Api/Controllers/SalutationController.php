<?php

namespace App\Addresses\Api\Controllers;

use App\Addresses\Api\Resources\SalutationResourceCollection;
use App\Addresses\Database\Repositories\SalutationRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class SalutationController
 *
 * @OA\Tag(
 *     name="Salutation",
 *     description="API Endpoints of Salutation"
 * )
 *
 * @package App\Addresses\Api\Controllers
 */
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
     * @OA\Get(
     *      path="/api/v1/salutations",
     *      operationId="index",
     *      tags={"Salutation"},
     *      summary="Get list of salutations",
     *      description="Returns list of salutations",
     *      security={{ "bearerAuth": {} }},
     *      @OA\Response(
     *          response=200,
     *          description="successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/SalutationResourceCollection"),
     *       ),
     *     )
     *
     * @return ResourceCollection - The requested salutations
     */
    public function index(): ResourceCollection
    {
        $salutations = $this->salutationRepository->findAll();

        return new SalutationResourceCollection($salutations);
    }
}
