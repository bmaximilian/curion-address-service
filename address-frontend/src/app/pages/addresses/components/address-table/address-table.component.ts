import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddressItem } from '../../address.model';

@Component({
    selector: 'app-address-table',
    templateUrl: './address-table.component.html',
    styleUrls: ['./address-table.component.scss'],
})
export class AddressTableComponent implements OnInit {
    public displayedColumns: string[] = ['name', 'birthday', 'address', 'city', 'postcode', 'actions'];

    public dataSource = new MatTableDataSource<AddressItem>();

    @Output()
    public delete = new EventEmitter<AddressItem>();

    @Output()
    public edit = new EventEmitter<AddressItem>();

    /**
     * Sets addresses to datasource
     *
     * @param addresses - The addresses
     */
    @Input()
    public set addresses(addresses: AddressItem[]) {
        this.dataSource.data = addresses;
    }

    /**
     * Executed in initialization
     */
    public ngOnInit(): void {
        this.dataSource = new MatTableDataSource<AddressItem>(this.addresses);
    }
}
