import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoyageListComponent } from './voyage-list/voyage-list.component';
import { RouterModule, Routes } from '@angular/router';
import { VoyageFormComponent } from './voyage-form/voyage-form.component';
import { VoyageUpdateComponent } from './voyage-update/voyage-update.component';
const routes: Routes = [
  { path: 'voyage', component: VoyageListComponent },
  { path: 'ajouter', component: VoyageFormComponent },
  { path: 'update', component: VoyageUpdateComponent }
  
];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
