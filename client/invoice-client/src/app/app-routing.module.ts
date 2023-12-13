import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {InvoicesComponent} from "./components/invoices/invoices.component";
import {InvoiceListComponent} from "./components/invoices/invoice-list/invoice-list.component";
import {InvoiceDetailsComponent} from "./components/invoices/invoice-details/invoice-details.component";

const routes: Routes = [

  {
    path: '',
    component: InvoicesComponent,
    children: [
      {
        path: 'invoice-list', component: InvoiceListComponent
      },
      {
        path: 'invoice-details/:id', component: InvoiceDetailsComponent
      },
      {
        path: '', redirectTo: 'invoice-list', pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
