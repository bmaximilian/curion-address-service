import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAddressesStart } from '../store/actions/address-list.actions';

@Component({
    selector: 'app-addresses-page',
    templateUrl: './addresses-page.component.html',
    styleUrls: ['./addresses-page.component.scss'],
})
export class AddressesPageComponent {
    /**
     * Constructor of Addresses page
     *
     * @param store - The store service
     */
    constructor(private store: Store) {
        store.dispatch(loadAddressesStart());
    }
}
