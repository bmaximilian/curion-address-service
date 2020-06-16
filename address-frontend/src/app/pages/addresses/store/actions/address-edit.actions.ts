import { createAction, props } from '@ngrx/store';
import { AddressItem } from '../../address.model';

export const editAddressStart = createAction('ADDRESSES::EDIT_ADDRESS_START', props<{ item: AddressItem }>());
export const editAddressSucceeded = createAction('ADDRESSES::EDIT_ADDRESS_SUCCEEDED', props<{ item: AddressItem }>());
export const editAddressFailed = createAction('ADDRESSES::EDIT_ADDRESS_FAILED', props<{ error: Error }>());
