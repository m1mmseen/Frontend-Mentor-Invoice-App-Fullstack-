import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Invoice} from "./invoice.model";

@Entity('address')
export class ClientAddress {
        @PrimaryGeneratedColumn()
        id: string;

        @Column({name: 'street'})
        street: string;

        @Column({name: 'city'})
        city: string;

        @Column({name: 'postCode'})
        postCode: string;

        @Column({name: 'country'})
        country: string;

        @OneToOne(() => Invoice, invoice => invoice.clientAddress)
        invoice: Invoice;

        constructor(address: Partial<ClientAddress> ) {
                Object.assign(this, address);
        }
}