import { createReducer, on } from '@ngrx/store';
import { loadAddressesStart, loadAddressesSucceeded } from '../actions/address-list.actions';
import { loadSalutationsSucceeded } from '../actions/salutation.actions';
import { AddressItem } from '../../address.model';
import { SalutationItem } from '../../salutation.model';
import { addAddressFailed, addAddressStart, addAddressSucceeded } from '../actions/address-add.actions';
import { deleteAddressFailed, deleteAddressStart, deleteAddressSucceeded } from '../actions/address-delete.actions';

export interface State {
    isLoading: boolean;
    isAddingAddress: boolean;
    items: AddressItem[];
    salutations: {
        items: SalutationItem[];
    };
}

export const initialState: State = {
    isLoading: false,
    isAddingAddress: false,
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
    on(addAddressStart, (state: State) => ({ ...state, isAddingAddress: true })),
    on(addAddressFailed, (state: State) => ({ ...state, isAddingAddress: false })),
    on(addAddressSucceeded, (state: State) => ({ ...state, isAddingAddress: false })),

    on(deleteAddressStart, (state: State) => ({ ...state, isDeletingAddress: true})),
    on(deleteAddressFailed, (state: State) => ({ ...state, isDeletingAddress: false })),
    on(deleteAddressSucceeded, (state: State) => ({ ...state, isDeletingAddress: false })),

];

export const addressesReducer = createReducer(initialState, ...ons);
