import {Component, Input} from '@angular/core';
import {Invoice} from "../../../interfaces";

@Component({
  selector: 'invoice-list-item',
  templateUrl: './invoice-list-item.component.html',
  styleUrls: ['./invoice-list-item.component.scss']
})
export class InvoiceListItemComponent {
  @Input() invoice: Invoice;

}
