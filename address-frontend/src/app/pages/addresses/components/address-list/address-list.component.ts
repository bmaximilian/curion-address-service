import { Component, Input } from '@angular/core';
import { AddressItem } from '../../address.model';

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent {
    @Input()
    public addresses: AddressItem[];
}
