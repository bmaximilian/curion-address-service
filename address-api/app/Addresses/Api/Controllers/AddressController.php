<?php

namespace App\Addresses\Api\Controllers;

use App\Addresses\Database\Models\Address;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        return response([]);
    }

    /**
     * Display the specified resource.
     *
     * @param  Address  $address
     * @return Response
     */
    public function show(Address $address): Response
    {
        return response($address->toJson());
    }
}
