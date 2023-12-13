import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {InvoicesModule} from "./invoices/invoices.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Invoice} from "./models/invoice.model";
import {Item} from "./models/item.model";
import {SenderAddress} from "./models/senderAddress.model";
import {ClientAddress} from "./models/clientAddress.model";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [Invoice, SenderAddress, ClientAddress, Item],
    }),
    InvoicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
