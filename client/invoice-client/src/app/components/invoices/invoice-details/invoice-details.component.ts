import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice.service";
import {Invoice} from "../../../interfaces";
import {Observable} from "rxjs";

@Component({
  selector: 'invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit{

  invoice: Invoice;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((routeParams) => {
      this.invoiceService.getInvoice(routeParams['id']).subscribe((response) => {
        this.invoice = response;
      });
    })

  }


}
