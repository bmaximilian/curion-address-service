import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../store/reducer/addresses.reducer';
import { loadAddressesStart } from '../../store/actions/address-list.actions';
import { AddressItem } from '../../address.model';

@Component({
    selector: 'app-addresses-page',
    templateUrl: './addresses-page.component.html',
    styleUrls: ['./addresses-page.component.scss'],
})
export class AddressesPageComponent implements OnInit {
    public $addresses;

    public functionMenuEnabled: boolean;

    /**
     * Constructor of Addresses page
     *
     * @param store - The store service
     */
    constructor(private store: Store<{ addresses: State }>) {
        this.$addresses = store.pipe(select((state) => state.addresses.items));
    }

    /**
     * Executed when the component is initialized
     */
    public ngOnInit(): void {
        this.functionMenuEnabled = false;
        this.store.dispatch(loadAddressesStart());
    }

    /**
     * Handler that is executed when the user requests to edit an address
     *
     * @param address - Address that should be edited
     */
    public editAddress(address: AddressItem): void {
        // console.log(address);
    }

    /**
     * Handler that is executed when the user requests to delete an address
     *
     * @param address - Address that should be deleted
     */
    public deleteAddress(address: AddressItem): void {
        // console.log('delete', address);
    }
}
