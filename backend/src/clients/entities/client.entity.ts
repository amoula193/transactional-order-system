import { Order } from '../../orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'clients' })
export class Client {

    @PrimaryGeneratedColumn({name: "client_id"})
    id!: number

    @Column({type: "varchar"})
    name!: string

    @OneToMany (() => Order, (order) => order.client)
    orders!: Order[];

}
