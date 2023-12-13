import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {Invoice} from "./invoice.model";

@Entity('item')
export class Item {
        @PrimaryGeneratedColumn()
        id: string;

        @Column({name: 'name'})
        name: string;

        @Column({name: 'quantity'})
        quantity: number;

        @Column({name: 'price'})
        price: number;

        @Column({name: 'total'})
        total: number


        constructor(item: Partial<Item> ) {
                Object.assign(this, item);
        }
}