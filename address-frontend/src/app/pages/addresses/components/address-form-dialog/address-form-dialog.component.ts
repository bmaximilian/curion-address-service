import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

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
     */
    constructor(
        public dialogRef: MatDialogRef<AddressFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

    /**
     * Click on the submit button
     */
    public handleSubmitClick(): void {
        this.dialogRef.close(true);
    }
}
