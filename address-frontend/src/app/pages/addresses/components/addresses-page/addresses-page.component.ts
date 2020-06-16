import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { State } from '../../store/reducer/addresses.reducer';
import { loadAddressesStart } from '../../store/actions/address-list.actions';
import { AddressItem } from '../../address.model';
import { loadSalutationsStart } from '../../store/actions/salutation.actions';
import { deleteAddressStart } from '../../store/actions/address-del.actions';
import { AddressFormDialogComponent, DialogData } from '../address-form-dialog/address-form-dialog.component';

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
     * @param dialog - The dialog service
     */
    constructor(private store: Store<{ addresses: State }>, public dialog: MatDialog) {
        this.$addresses = store.pipe(select((state) => state.addresses.items));
    }

    /**
     * Executed when the component is initialized
     */
    public ngOnInit(): void {
        this.functionMenuEnabled = true;
        this.store.dispatch(loadAddressesStart());
        this.store.dispatch(loadSalutationsStart());
    }
    /**
     * Handler that is executed when the user requests to add an address
     */
    public addAddress(): void {
        this.dialog.open(AddressFormDialogComponent, {
            data: {
                title: 'pages.addresses.addDialog.title',
                submitButtonLabel: 'pages.addresses.addDialog.submit',
            },
        });
    }

    /**
     * Handler that is executed when the user requests to edit an address
     *
     * @param address - Address that should be edited
     */
    public editAddress(address: AddressItem): void {
        const dialogRef = this.dialog.open(AddressFormDialogComponent, {
            data: {
                title: 'pages.addresses.editDialog.title',
                submitButtonLabel: 'pages.addresses.editDialog.submit',
                id: address.id,
                salutation: address.salutation,
                firstName: address.firstName,
                lastName: address.lastName,
                birthday: address.birthday,
                postalCode: address.postalCode,
                city: address.city,
                address: address.address,
            },
        });
        dialogRef.afterClosed().subscribe();
        console.log(address.firstName);
        console.log(address.id);
    }

    /**
     * Handler that is executed when the user requests to delete an address
     *
     * @param address - Address that should be deleted
     */
    public deleteAddress(address: AddressItem): void {
        const item = address;
        this.store.dispatch(deleteAddressStart({ item }));
    }
}
