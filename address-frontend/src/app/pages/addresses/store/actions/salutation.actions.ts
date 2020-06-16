import { createAction, props } from '@ngrx/store';

export const loadSalutationsStart = createAction('ADDRESSES::SALUTATIONS_LOAD_START');
export const loadSalutationsSucceeded = createAction(
    'ADDRESSES::SALUTATIONS_LOAD_SUCCEEDED',
    props<{ salutations: any[] }>(),
);
export const loadSalutationFailed = createAction('ADDRESSES::SALUTATIONS_LOAD_FAILED');
