import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AddressesService } from '../../addresses.service';
import { loadAddressesFailed, loadAddressesStart, loadAddressesSucceeded } from '../actions/address-list.actions';

@Injectable()
export class AddressEffects {
    /**
     * Loads the address list when dispatching the start action
     */
    public loadAddresses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadAddressesStart),
            mergeMap(() =>
                this.addressesService.getAll().pipe(
                    map((response) => loadAddressesSucceeded({ items: response.data })),
                    catchError((e) => of(loadAddressesFailed(e))),
                ),
            ),
        ),
    );

    /**
     * Constructor of address effects
     *
     * @param actions$ - The action observable
     * @param addressesService - The address service
     */
    constructor(private actions$: Actions, private addressesService: AddressesService) {}
}
