import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { loadAddressesStart } from '../../store/actions/address-list.actions';
import { AddressItem } from '../../address.model';
import { State } from '../../store/reducer/addresses.reducer';

@Component({
    selector: 'app-addresses-page',
    templateUrl: './addresses-page.component.html',
    styleUrls: ['./addresses-page.component.scss'],
})
export class AddressesPageComponent {
    public displayedColumns: string[] = ['name', 'birthday', 'address', 'city', 'postcode'];

    public dataSource = new MatTableDataSource<AddressItem>([]);

    /**
     * Constructor of Addresses page
     *
     * @param store - The store service
     */
    constructor(private store: Store<{ addresses: State }>) {
        store.dispatch(loadAddressesStart());

        store.pipe(select((state) => state.addresses.items)).subscribe((items) => {
            this.dataSource.data = items;
        });
    }
}
