import { createAction, props } from '@ngrx/store';
import { AddressItem } from '../../address.model';

export const deleteAddressStart = createAction('ADDRESSES::DELETE_ADDRESS_START', props<{ item: AddressItem }>());
export const deleteAddressSucceeded = createAction(
    'ADDRESSES::DELETE_ADDRESS_SUCCEEDED',
    props<{ item: AddressItem }>(),
);
export const deleteAddressFailed = createAction('ADDRESSES::DELETE_ADDRESS_FAILED', props<{ error: Error }>());
