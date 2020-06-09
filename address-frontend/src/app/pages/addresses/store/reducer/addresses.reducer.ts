import { createReducer, on } from '@ngrx/store';
import { loadAddressesStart, loadAddressesSucceeded } from '../actions/address-list.actions';
import { loadSalutationsSucceeded } from '../actions/salutation.actions';
import { AddressItem } from '../../address.model';
import { SalutationItem } from '../../salutation.model';

export interface State {
    isLoading: boolean;
    items: AddressItem[];
    salutations: {
        items: SalutationItem[];
    };
}

export const initialState: State = {
    isLoading: false,
    items: [],
    salutations: {
        items: [],
    },
};

const ons = [
    on(loadAddressesStart, (state: State) => ({ ...state, isLoading: true })),
    on(loadAddressesSucceeded, (state: State, action) => ({
        ...state,
        isLoading: false,
        items: action.items,
    })),
    on(loadSalutationsSucceeded, (state: State, action) => ({
        ...state,
        salutations: {
            ...state.salutations,
            items: action.salutations,
        },
    })),
];

export const addressesReducer = createReducer(initialState, ...ons);
