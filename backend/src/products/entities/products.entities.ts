import { Check, Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name: 'products' })
@Check(' "price" > 0 ')
@Check(' "available_stock" >= 0 ')
export class Product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: "varchar" })
    name!: string

    @Column({ 
        type: "numeric",
        precision: 10,
        scale:2
    })
    price!: string

    @Column({
        type: "integer",
        default: 0,
        name: "available_stock"
    })
    availableStock!: number
}