import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {EtudiantLayoutComponent} from "./layouts/etudiant-layout/etudiant-layout.component";
import {ChambreAddComponent} from "./layouts/admin-layout/Chambre-layout/chambre-add/chambre-add.component";

const routes: Routes =[
  {
    path: 'admin',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
      }]},
  {
    path: 'etudiant',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  // { path: 'chambre/add', component: ChambreAddComponent },

  {
    path: 'etudiant',
    component: EtudiantLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/etudiant-layout/etudiant-layout.module').then(x => x.EtudiantLayoutModule)
      }]},
  { path: "/chamber/add", component: ChambreAddComponent },
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
