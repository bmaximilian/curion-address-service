import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressesPageComponent } from './pages/addresses/addresses-page/addresses-page.component';
import { OccasionsPageComponent } from './pages/occasions/occasions-page/occasions-page.component';
import { AbsencePageComponent } from './pages/absence/absence-page/absence-page.component';
import { AbsenceModule } from './pages/absence/absence.module';
import { OccasionsModule } from './pages/occasions/occasions.module';
import { AddressesModule } from './pages/addresses/addresses.module';

const routes: Routes = [
    { path: 'addresses', component: AddressesPageComponent },
    { path: 'occasions', component: OccasionsPageComponent },
    { path: 'absence', component: AbsencePageComponent },
    { path: '', redirectTo: '/addresses', pathMatch: 'full' },
];

@NgModule({
    imports: [AbsenceModule, OccasionsModule, AddressesModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
