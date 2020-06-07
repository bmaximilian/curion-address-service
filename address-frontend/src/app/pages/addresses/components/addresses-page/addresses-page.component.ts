import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../store/reducer/addresses.reducer';
import { loadAddressesStart } from '../../store/actions/address-list.actions';

@Component({
    selector: 'app-addresses-page',
    templateUrl: './addresses-page.component.html',
    styleUrls: ['./addresses-page.component.scss'],
})
export class AddressesPageComponent implements OnInit {
    public $addresses;

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
        this.store.dispatch(loadAddressesStart());
    }
}
