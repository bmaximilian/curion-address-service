import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionApiResponse } from '../../../lib/util/api-response';
import { SalutationItem } from './salutation.model';

type SalutationsResponse = CollectionApiResponse<SalutationItem>;

@Injectable()
export class SalutationsService {
    /**
     * Constructor of SalutationsService
     *
     * @param httpClient - Http service of angular
     */
    constructor(private httpClient: HttpClient) {}

    /**
     * Get all salutations
     *
     * @returns - An observable that emits with the fetched salutations
     */
    public getAll(): Observable<SalutationsResponse> {
        return this.httpClient.get('/salutations') as Observable<SalutationsResponse>;
    }
}
