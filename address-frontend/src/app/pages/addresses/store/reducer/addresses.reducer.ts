import { createReducer, on } from '@ngrx/store';
import { loadAddressesStart, loadAddressesSucceeded } from '../actions/address-list.actions';
import { AddressItem } from '../../address.model';

interface State {
    isLoading: boolean;
    items: AddressItem[];
}

export const initialState: State = {
    isLoading: false,
    items: [],
};

const ons = [
    on(loadAddressesStart, (state: typeof initialState) => ({ ...state, isLoading: true })),
    on(loadAddressesSucceeded, (state: typeof initialState, action) => ({
        ...state,
        isLoading: false,
        items: action.items,
    })),
];

export const addressesReducer = createReducer(initialState, ...ons);
