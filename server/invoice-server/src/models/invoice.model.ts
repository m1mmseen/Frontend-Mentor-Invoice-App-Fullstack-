

import {Column, Entity, PrimaryColumn} from "typeorm";



@Entity('invoice')
export class Invoice {
    @PrimaryColumn()
    id: string;

    @Column({ name: 'createdAt'})
    createdAt: string;

    @Column({ name: 'paymentDue',})
    paymentDue: string;

    @Column({ name: 'description', length: 70})
    description: string;
    @Column({ name: 'paymentTerms'})
    paymentTerms: number;

    @Column({ name: 'clientName'})
    clientName: string;

    @Column({ name: 'clientEmail', unique: true})
    clientEmail: string;

    @Column({ name: 'status'})
    status: string;

    @Column('json', {nullable: true})
    senderAddress: {
        street: string;
        city: string;
        postCode: string;
        country: string;
    };
    @Column('simple-json', {nullable: true})
    clientAddress: {
        street: string;
        city: string;
        postCode: string;
        country: string;
    };

    @Column('simple-json', {nullable: true})
    items: {
        name: string;
        quantity: number;
        price: number;
        total: number;
    }[];

    @Column({ name: 'total'})
    total: number;

    constructor(invoice: Partial<Invoice> ) {
        Object.assign(this, invoice);
    }
}