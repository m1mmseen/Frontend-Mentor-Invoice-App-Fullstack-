import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InvoiceService} from "../../../services/invoice.service";
import {Invoice} from "../../../interfaces";

@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})


export class InvoiceListComponent implements OnInit {
  filterValues: string[] = ['paid', 'pending', 'draft']
  filter: string = '';
  filteredInvoices: Invoice[];
  invoices: Invoice[] = [];
  selected: string | null = null;

  constructor(private http: HttpClient, private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.getInvoices()
  }

  getInvoices() {
    this.invoiceService.getAllInvoices()
      .subscribe({
        next: (response) => {
          this.invoices = response;
          this.filteredInvoices = response;
        },
        error: (error) => {
          console.log(error)
        }
      });
  }

  openFilter() {
    document.querySelector(".filter-content")!.classList.toggle("hidden");
  }

  addFilter(filter: string) {
      this.selected = this.selected === filter ? null : filter;
      console.log(this.filter);
      this.showFilteredInvoices();
  }

  showFilteredInvoices() {
    if (this.selected === null) {
      this.filteredInvoices = this.invoices;
    } else {
      this.filteredInvoices = this.invoices.filter(element =>  element.status === this.selected);
    }

  }

}
