import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { InvoiceListComponent } from './components/invoices/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './components/invoices/invoice-details/invoice-details.component';
import { InvoiceListItemComponent } from './components/invoices/invoice-list-item/invoice-list-item.component';
import { BtnComponent } from './components/shared/btn/btn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import { PaymentStatusComponent } from './components/shared/payment-status/payment-status.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InvoicesComponent,
    InvoiceListComponent,
    InvoiceDetailsComponent,
    InvoiceListItemComponent,
    BtnComponent,
    PaymentStatusComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
