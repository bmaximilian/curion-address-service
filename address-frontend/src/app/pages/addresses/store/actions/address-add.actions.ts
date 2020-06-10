import { createAction, props } from '@ngrx/store';
import { AddressItem } from '../../address.model';

export const addAddressStart = createAction('ADDRESSES::ADD_ADDRESS_START', props<{ item: AddressItem }>());
export const addAddressSucceeded = createAction('ADDRESSES::ADD_ADDRESS_SUCCEEDED', props<{ item: AddressItem }>());
export const addAddressFailed = createAction('ADDRESSES::ADD_ADDRESS_FAILED', props<{ error: Error }>());
