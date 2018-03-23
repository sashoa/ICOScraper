import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { IcoComponent } from './ico/ico.component';
import { IcoListComponent } from './ico-list/ico-list.component';
import { IcoDataService } from "./services/ico/ico-data.service";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    IcoComponent,
    IcoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    MomentModule
  ],
  providers: [IcoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
