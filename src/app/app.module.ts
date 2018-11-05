import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnectionService } from './services/connection.service';
import { DashboardModule } from './dashboard';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DriverComponent} from './driver/driver.component';
import { CustomerComponent } from './customer/customer.component';

import { CustomerModule } from './customer';
import {DriverModule} from './driver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomerModule,
    DashboardModule,
    DriverModule,
    MomentModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/customer', pathMatch: 'full'},
      { path: 'customer', component: CustomerComponent, loadChildren: (): any => CustomerModule, },
      { path: 'dashboard', component: DashboardComponent, loadChildren: (): any => DashboardModule, },
      {
        path: 'driver',
        component: DriverComponent, loadChildren: (): any => DriverModule,
      },
    ]),
  ],
  providers: [ ConnectionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
