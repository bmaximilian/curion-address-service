import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressItem } from './address.model';

interface AddressListResponse {
    data: AddressItem[];
}

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
     * @returns - A observable that emits the response
     */
    public getAll(): Observable<AddressListResponse> {
        return this.http.get('/addresses') as Observable<AddressListResponse>;
    }
}
