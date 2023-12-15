import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../../../services/invoice.service";
import {ClientAddress, Invoice, Item, SenderAddress} from "../../../interfaces";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {InvoiceModalComponent} from "../../shared/invoice-modal/invoice-modal.component";
import {DeleteModalComponent} from "../../shared/delete-modal/delete-modal.component";

@Component({
  selector: 'invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit{

  @Input() invoice: Invoice = {
    id: '',
    createdAt: '',
    paymentDue: '',
    description: '',
    paymentTerms: 0,
    clientName: '',
    clientEmail: '',
    status: '',
    senderAddress: {
      street: '',
      city: '',
      postCode: '',
      country: ''
    },
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: ''
    },
    items: [],
    total: 0,
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private invoiceService: InvoiceService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((routeParams) => {
      this.invoiceService.getInvoice(routeParams['id']).subscribe((response) => {
        this.invoice = response;
      });
    })
  }

  openInvoiceModal(invoice: Invoice) {
    if (window.innerWidth < 616) {    this.dialog.open(InvoiceModalComponent, {
      data: invoice,
      maxWidth: '100svw',
      width: '100%' ,
      height: '100%',
      position: {top: '0', left: '0', right: '0'},
    });
    } else {
      this.dialog.open(InvoiceModalComponent, {
        data: invoice,
        width: '616px',
        height: '100%',
        position: {top: '0', left: '0'}
      });
    }
  }

  openDeleteModal(id: string) {
    if (window.innerWidth < 768) {    this.dialog.open(DeleteModalComponent, {
      data: {id},
      width: '327px',
      height: '220px'
    });
    } else {
      this.dialog.open(DeleteModalComponent, {
        data: id,
        width: '480px',
        height: '249px'
      });
    }
  }

    protected readonly window = window;
}
