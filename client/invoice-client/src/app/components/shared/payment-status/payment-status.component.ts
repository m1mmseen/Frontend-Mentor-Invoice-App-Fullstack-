import {Component, Input} from '@angular/core';
import {Invoice} from "../../../interfaces";

@Component({
  selector: 'payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss']
})
export class PaymentStatusComponent {
  @Input() invoice: Invoice;
}
