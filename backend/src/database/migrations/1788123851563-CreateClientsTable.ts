import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClientsTable1788123851563 implements MigrationInterface {
    name = 'CreateClientsTable1788123851563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("client_id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_49e91f1e368e3f760789e7764aa" PRIMARY KEY ("client_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
