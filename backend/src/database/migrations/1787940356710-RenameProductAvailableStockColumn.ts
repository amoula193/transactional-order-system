import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameProductAvailableStockColumn1787940356710 implements MigrationInterface {
    name = 'RenameProductAvailableStockColumn1787940356710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "CHK_3ad0435399a3576fe83e680297"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "availableStock" TO "available_stock"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "CHK_516fb5f25adba4933d812fa36f" CHECK ( "available_stock" >= 0 )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "CHK_516fb5f25adba4933d812fa36f"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "available_stock" TO "availableStock"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "CHK_3ad0435399a3576fe83e680297" CHECK (("availableStock" >= 0))`);
    }

}
