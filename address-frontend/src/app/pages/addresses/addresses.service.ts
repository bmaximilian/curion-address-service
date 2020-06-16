import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionApiResponse } from '../../../lib/util/api-response';
import { AddressItem } from './address.model';
import {AddressInfo} from 'net';

type AddressListResponse = CollectionApiResponse<AddressItem>;

@Injectable()
export class AddressesService {
    /**
     * Constructor of address service
     *
     * @param http - The http client
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns a list of addresses
     *
     * @returns - An observable that emits the response
     */
    public getAll(): Observable<AddressListResponse> {
        return this.http.get('/addresses') as Observable<AddressListResponse>;
    }

    /**
     * Adds an address to the backend
     *
     * @param address - The address to add
     * @returns - An observable that emits the added address
     */
    public add(address: AddressItem): Observable<AddressItem> {
        return this.http.post('/addresses', address) as Observable<AddressItem>;
    }

    /**
     *Deletes an address record from backend
     *
     *@param addrRec Record that is to delete
     *@return An Observable that emits the deleted address
     */
    public del(addrRec: AddressItem): Observable<AddressItem> {
        const addrId = addrRec.id;
        const aID = addrId.toString();
        return this.http.delete(`/addresses/${aID}`) as Observable<AddressItem>;
    }
    public edit(address: AddressItem): Observable<AddressItem> {
        return this.http.put(`/addresses/${address.id}`, address) as Observable<AddressItem>;
    }
}
