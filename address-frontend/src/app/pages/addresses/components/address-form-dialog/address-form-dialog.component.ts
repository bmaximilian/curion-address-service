import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

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
