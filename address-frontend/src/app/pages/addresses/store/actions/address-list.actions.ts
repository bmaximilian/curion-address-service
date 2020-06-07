import { createAction, props } from '@ngrx/store';
import { AddressItem } from '../../address.model';

export const loadAddressesStart = createAction('ADDRESSES::LOAD_ADDRESSES_START');
export const loadAddressesSucceeded = createAction(
    'ADDRESSES::LOAD_ADDRESSES_SUCCEEDED',
    props<{ items: AddressItem[] }>(),
);
export const loadAddressesFailed = createAction('ADDRESSES::LOAD_ADDRESSES_FAILED', props<{ error: Error }>());
