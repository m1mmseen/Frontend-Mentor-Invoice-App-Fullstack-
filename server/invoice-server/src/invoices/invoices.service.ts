import {Injectable, NotFoundException} from "@nestjs/common";
import {Invoice} from "../models/invoice.model";
import {EntityManager, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {InvoiceDto} from "../dto/invoice.dto";



@Injectable()
export class InvoicesService {

    constructor(
        private readonly entityManager: EntityManager,
        @InjectRepository(Invoice)
        private readonly invoiceRepo: Repository<Invoice>) {
    }

    async newInvoice(invoice: Invoice) {

        const newInvoice = new Invoice(invoice);
        await this.entityManager.save(newInvoice);
        return newInvoice;
    }

    getAllInvoices() {
       return this.invoiceRepo.find();
    }

    async getInvoiceById(invoiceId: string) {
        const invoice = await this.findInvoice(invoiceId);
        if (invoice) {
            return invoice;
        } else {
            throw new NotFoundException("Could not find invoice with this id")
        }

    }

    async deleteInvoice(invoiceId: string) {
        const invoice = await this.findInvoice(invoiceId);
        if (invoice) {
            await this.invoiceRepo.remove(invoice);
        } else {
            throw new NotFoundException("Could not find invoice with this id")
        }
    }

    async editInvoice(invoiceId: string, invoiceDto: InvoiceDto) {
        await this.invoiceRepo.createQueryBuilder()
            .update(Invoice)
            .set({
                paymentDue: invoiceDto.paymentDue,
                description: invoiceDto.description,
                paymentTerms: invoiceDto.paymentTerms,
                clientName: invoiceDto.clientName,
                clientEmail: invoiceDto.clientEmail,
                status: invoiceDto.status,
                senderAddress: invoiceDto.senderAddress,
                clientAddress: invoiceDto.clientAddress,
                items: invoiceDto.items,
                total: invoiceDto.total
            })
            .where("id = :id", {id: invoiceId})
            .execute()
    }

    private async findInvoice(invoiceId: string)  {

        return await this.invoiceRepo.findOneBy({id: invoiceId})


    }
}