import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SalutationsService } from '../../salutations.service';
import { loadSalutationFailed, loadSalutationsStart, loadSalutationsSucceeded } from '../actions/salutation.actions';

@Injectable()
export class SalutationEffects {
    /**
     * Loads the salutations when dispatching the start action
     */
    public loadSalutations$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadSalutationsStart),
            mergeMap(() =>
                this.salutationsService.getAll().pipe(
                    map((response) => loadSalutationsSucceeded({ salutations: response.data })),
                    catchError(() => of(loadSalutationFailed())),
                ),
            ),
        ),
    );

    /**
     * Constructor of address effects
     *
     * @param actions$ - The action observable
     * @param salutationsService - The salutations service
     */
    constructor(private actions$: Actions, private salutationsService: SalutationsService) {}
}
