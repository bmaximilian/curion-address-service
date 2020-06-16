import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AddressesService } from '../../addresses.service';
import { loadAddressesFailed, loadAddressesStart, loadAddressesSucceeded } from '../actions/address-list.actions';
import { addAddressFailed, addAddressStart, addAddressSucceeded } from '../actions/address-add.actions';
import { deleteAddressFailed, deleteAddressStart, deleteAddressSucceeded } from '../actions/address-delete.actions';

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
     * Add the passed address when dispatching the start action
     */
    public addAddress$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addAddressStart),
            mergeMap((addressStartAction) =>
                this.addressesService.add(addressStartAction.item).pipe(
                    map((response) => addAddressSucceeded({ item: response })),
                    catchError((e) => of(addAddressFailed(e))),
                ),
            ),
        ),
    );

    /**
     * Deletes the passed address when dispatching the start action
     */
    public delAddress$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteAddressStart),
            mergeMap((addressStartAction) =>
                this.addressesService.delete(addressStartAction.item).pipe(
                    map(() => deleteAddressSucceeded()),
                    catchError((e) => of(deleteAddressFailed(e))),
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
