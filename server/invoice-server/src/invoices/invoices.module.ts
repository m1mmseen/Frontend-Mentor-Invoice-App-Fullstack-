import {Module} from "@nestjs/common";
import {InvoicesController} from "./invoices.controller";
import {InvoicesService} from "./invoices.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Invoice} from "../models/invoice.model";
import {Item} from "../models/item.model";
import {SenderAddress} from "../models/senderAddress.model";
import {ClientAddress} from "../models/clientAddress.model";



@Module({
    imports: [TypeOrmModule.forFeature([Invoice, SenderAddress, ClientAddress, Item])],
    controllers: [InvoicesController],
    providers: [InvoicesService],

})
export class  InvoicesModule {

}