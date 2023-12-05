import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { ChambreDetailsComponent } from './chambre-layout/chambre-details/chambre-details.component';
import { ChambreDeleteComponent } from './chambre-layout/chambre-delete/chambre-delete.component';
import { ChambreUpdateComponent } from './chambre-layout/chambre-update/chambre-update.component';



@NgModule({
  declarations: [
    HomeComponent,
    SidenavAdminComponent,
    ChambreDetailsComponent,
    ChambreDeleteComponent,
    ChambreUpdateComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],


  exports: [
    SidenavAdminComponent
  ]
})

export class AdminLayoutModule {}
