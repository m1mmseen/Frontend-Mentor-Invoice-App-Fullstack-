import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {InvoicesService} from "./invoices.service";
import {Invoice} from "../models/invoice.model";
import {InvoiceDto} from "../dto/invoice.dto";

@Controller('invoices')
export class InvoicesController {

    constructor(private invoiceService: InvoicesService) {
    }

    @Post()
    addInvoice(
        @Body() invoice: Invoice ) : any{
        return this.invoiceService.newInvoice(invoice);

    }

    @Get()
    getAllInvoices() {
        return this.invoiceService.getAllInvoices();
    }

    @Get(':invoiceId')
    getInvoiceById(@Param('invoiceId') id: string) {
        return this.invoiceService.getInvoiceById(id)
    }

    @Patch(':invoiceId')
    editInvoice(
        @Param('invoiceId') id: string,
        @Body() invoiceDto: InvoiceDto){
        this.invoiceService.editInvoice(id,invoiceDto);
        return "Updated";
    }

    @Delete(':id')
        deleteInvoice(@Param('id') invoiceId: string) {
        this.invoiceService.deleteInvoice(invoiceId);
        return "Deleted";
    }

}