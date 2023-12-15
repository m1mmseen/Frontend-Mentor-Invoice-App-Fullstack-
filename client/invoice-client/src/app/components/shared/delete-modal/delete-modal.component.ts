import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeleteData} from "../../../interfaces";
import {InvoiceService} from "../../../services/invoice.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public invoiceId: string,
    private invoiceService: InvoiceService,
    private router: Router) {}

  deleteInvoice() {
    this.invoiceService.deleteInvoice(this.invoiceId).subscribe(res => console.log(res));
    this.router.navigate(['/invoice-list']);
  }

}
