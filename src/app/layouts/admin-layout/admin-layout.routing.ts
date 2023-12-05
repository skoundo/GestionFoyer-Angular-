import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import {ChambreAddComponent} from "./Chambre-layout/chambre-add/chambre-add.component";
import {ChambreDetailsComponent} from "./Chambre-layout/chambre-details/chambre-details.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'admin',      component: HomeComponent },
    { path: 'chambre', redirectTo: 'chambredetails', pathMatch: 'full' },
    { path: 'chambre/add', component: ChambreAddComponent },
    { path: 'chambredetails', component: ChambreDetailsComponent},

];
