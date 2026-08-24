import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsTable1787528968684 implements MigrationInterface {
    name = 'CreateProductsTable1787528968684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "availableStock" integer NOT NULL DEFAULT '0', CONSTRAINT "CHK_3ad0435399a3576fe83e680297" CHECK ( "availableStock" >= 0 ), CONSTRAINT "CHK_115d10f4097cff2d8598de3ddd" CHECK ( "price" > 0 ), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
