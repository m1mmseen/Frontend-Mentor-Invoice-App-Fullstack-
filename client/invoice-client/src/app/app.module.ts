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
import {ScrollingModule} from '@angular/cdk/scrolling';
import {Scroll} from "@angular/router";
import { InvoiceModalComponent } from './components/shared/invoice-modal/invoice-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import { MatButtonModule} from "@angular/material/button";
import { DeleteModalComponent } from './components/shared/delete-modal/delete-modal.component';



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
    InvoiceModalComponent,
    DeleteModalComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatMenuModule,
        ScrollingModule,
        MatDialogModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
