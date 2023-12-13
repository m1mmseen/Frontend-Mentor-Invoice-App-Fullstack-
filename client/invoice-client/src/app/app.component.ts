import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Invoice} from "./interfaces";
import {Observable} from "rxjs";
import {InvoiceService} from "./services/invoice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoice-client';


  constructor(private http: HttpClient, private invoiceService: InvoiceService) {
  }


}
