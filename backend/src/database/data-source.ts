import 'dotenv/config'
import { DataSource } from 'typeorm'
import { Product } from '../products/entities/products.entities'
import { Client } from '../clients/entities/client.entity'


export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    entities: [Product, Client],
    migrations: ['src/database/migrations/*.ts'],
    synchronize: false,
})