import {MigrationInterface, QueryRunner} from "typeorm";

export class ControllersManagersRamenType1630322277950 implements MigrationInterface {
    name = 'ControllersManagersRamenType1630322277950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."ramenshop" RENAME COLUMN "type" TO "typeId"`);
        await queryRunner.query(`CREATE TABLE "ramentype" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_e9030d46ec3827108237633c1ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."ramenshop" DROP COLUMN "typeId"`);
        await queryRunner.query(`ALTER TABLE "public"."ramenshop" ADD "typeId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."ramenshop" ADD CONSTRAINT "FK_20199cce268477c48097a6eec5d" FOREIGN KEY ("typeId") REFERENCES "ramentype"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."ramenshop" DROP CONSTRAINT "FK_20199cce268477c48097a6eec5d"`);
        await queryRunner.query(`ALTER TABLE "public"."ramenshop" DROP COLUMN "typeId"`);
        await queryRunner.query(`ALTER TABLE "public"."ramenshop" ADD "typeId" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "ramentype"`);
        await queryRunner.query(`ALTER TABLE "public"."ramenshop" RENAME COLUMN "typeId" TO "type"`);
    }

}
