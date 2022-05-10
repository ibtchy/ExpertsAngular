import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { VoyageListComponent } from './voyage-list/voyage-list.component';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { VoyageFormComponent } from './voyage-form/voyage-form.component';
import { VoyageUpdateComponent } from './voyage-update/voyage-update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
   VoyageListComponent,
   VoyageFormComponent,
   VoyageUpdateComponent,
   NavbarComponent,
   SidebarComponent,
   ContentComponent,
   FilterPipe,
  

  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

