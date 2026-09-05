import { Client } from '../../clients/entities/client.entity';
import { OrderItem } from './order-item.entity';
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'orders' })
export class Order {
    @PrimaryGeneratedColumn({name: "order_id"})
    id!: number

    @CreateDateColumn({
        name: "created_at",
        type: "timestamptz"})
    createdAt!: Date

    @ManyToOne(() => Client, (client) => client.orders, {nullable: false},)
    @JoinColumn({ name: "client_id"})
    client!: Client

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    items!: OrderItem[];
}
