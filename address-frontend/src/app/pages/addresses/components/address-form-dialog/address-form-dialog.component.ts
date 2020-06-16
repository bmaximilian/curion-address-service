import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SalutationItem } from '../../salutation.model';
import { State } from '../../store/reducer/addresses.reducer';
import { addAddressStart } from '../../store/actions/address-add.actions';
import { editAddressStart } from '../../store/actions/address-edit.actions';

export interface DialogData {
    id: number;
    salutation: string;
    title: string;
    submitButtonLabel: string;
    firstName: string;
    lastName: string;
    birthday: Date;
    postalCode: string;
    city: string;
    address: string;
}

@Component({
    selector: 'app-address-form-dialog',
    templateUrl: './address-form-dialog.component.html',
    styleUrls: ['./address-form-dialog.component.scss'],
})
export class AddressFormDialogComponent {
    public $salutations: Observable<SalutationItem[]>;

    public addressForm = new FormGroup({
        salutation: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        birthday: new FormControl(''),
        address: new FormControl(''),
        postalCode: new FormControl(''),
        city: new FormControl(''),
    });

    /**
     * Constructor of dialog component
     *
     * @param dialogRef - Reference to the dialog instance
     * @param data - The passed dialog data
     * @param store - The application store of ngrx
     */
    constructor(
        public dialogRef: MatDialogRef<AddressFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public store: Store<{ addresses: State }>,
    ) {
        this.$salutations = store.pipe(select((state) => state.addresses.salutations.items));
        this.addressForm.setValue({
            salutation: data.salutation,
            firstName: data.firstName,
            lastName: data.lastName,
            birthday: data.birthday,
            address: data.address,
            postalCode: data.postalCode,
            city: data.city,
        });
    }

    /**
     * Click on the submit button
     */
    public handleSubmitClick(): void {
        const item = this.addressForm.value;
        if (this.data.id) {
            this.store.dispatch(editAddressStart({ item: { ...item, id: this.data.id } }));
        } else {
            this.store.dispatch(addAddressStart({ item }));
        }
        this.dialogRef.close(true);
    }
}
