import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'clients' })
export class Client {

    @PrimaryGeneratedColumn({name: "client_id"})
    id!: number

    @Column({type: "varchar"})
    name!: string
    
}
