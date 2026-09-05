import { Check, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Order } from "./order.entity";
import { Product } from '../../products/entities/products.entities';

@Entity({name: "order_items"})
@Check(' "unit_price_at_purchase" > 0 ')
@Check(' "ordered_quantity" > 0 ')
@Unique(['order', 'product'])
export class OrderItem {

    @PrimaryGeneratedColumn({name: "order_item_id"})
    id!: number

    @Column({
        name: "ordered_quantity",
        type: "integer"
    })
    orderedQuantity!: number

    @Column({
        name: "unit_price_at_purchase",
        type: "numeric",
        precision: 10,
        scale:2})
    unitPriceAtPurchase!: string

    @ManyToOne(() => Order, (order) => order.items, {nullable: false},)
    @JoinColumn({ name: 'order_id' })
    order!: Order;


    @ManyToOne(() => Product, (product) => product.orderItems, {nullable: false},)
    @JoinColumn({ name: 'product_id'})
    product!: Product;
    
    
}
