import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SalutationItem } from '../../salutation.model';
import { State } from '../../store/reducer/addresses.reducer';

export interface DialogData {
    title: string;
    submitButtonLabel: string;
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
     * @param data - The passed dialog dta
     * @param store - The application store of ngrx
     */
    constructor(
        public dialogRef: MatDialogRef<AddressFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public store: Store<{ addresses: State }>,
    ) {
        this.$salutations = store.pipe(select((state) => state.addresses.salutations.items));
    }

    /**
     * Click on the submit button
     */
    public handleSubmitClick(): void {
        this.dialogRef.close(true);
    }
}
