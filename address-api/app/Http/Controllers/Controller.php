<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="Address API documentation",
 *      description="API to manage addresses",
 *      @OA\Contact(
 *          email="admin@curion.ch"
 *      )
 * )
 *
 * @OA\SecurityScheme(
 *     type="apiKey",
 *     description="Bearer JWT Auth",
 *     name="Authorization",
 *     in="header",
 *     securityScheme="bearerAuth"
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
