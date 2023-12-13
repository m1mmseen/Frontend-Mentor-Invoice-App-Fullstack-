import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InvoiceService} from "../../../services/invoice.service";
import {Invoice} from "../../../interfaces";

@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit{

  invoices: Invoice[];

  constructor(private http: HttpClient, private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.getInvoices()
  }

  getInvoices() {
    this.invoiceService.getAllInvoices()
      .subscribe({
        next: (response) => this.invoices = response,
        error: (error) => {
          console.log(error)
        }
      });
  }

}
