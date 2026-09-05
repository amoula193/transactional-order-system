import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrdersAndOrderItemsTables1788603398276 implements MigrationInterface {
    name = 'CreateOrdersAndOrderItemsTables1788603398276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("order_id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "client_id" integer NOT NULL, CONSTRAINT "PK_cad55b3cb25b38be94d2ce831db" PRIMARY KEY ("order_id"))`);
        await queryRunner.query(`CREATE TABLE "order_items" ("order_item_id" SERIAL NOT NULL, "ordered_quantity" integer NOT NULL, "unit_price_at_purchase" numeric(10,2) NOT NULL, "order_id" integer NOT NULL, "product_id" integer NOT NULL, CONSTRAINT "UQ_6335813ef19bc35b8d866cc6565" UNIQUE ("order_id", "product_id"), CONSTRAINT "CHK_35e5bc07b1bd8921e1da99fccf" CHECK ( "ordered_quantity" > 0 ), CONSTRAINT "CHK_c16c3e3d7f6c94960a8bb94a69" CHECK ( "unit_price_at_purchase" > 0 ), CONSTRAINT "PK_54c952fdc94b9b487ef968b4047" PRIMARY KEY ("order_item_id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_505ba3689ef2763acd6c4fc93a4" FOREIGN KEY ("client_id") REFERENCES "clients"("client_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_items" ADD CONSTRAINT "FK_145532db85752b29c57d2b7b1f1" FOREIGN KEY ("order_id") REFERENCES "orders"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_items" ADD CONSTRAINT "FK_9263386c35b6b242540f9493b00" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_items" DROP CONSTRAINT "FK_9263386c35b6b242540f9493b00"`);
        await queryRunner.query(`ALTER TABLE "order_items" DROP CONSTRAINT "FK_145532db85752b29c57d2b7b1f1"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_505ba3689ef2763acd6c4fc93a4"`);
        await queryRunner.query(`DROP TABLE "order_items"`);
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
