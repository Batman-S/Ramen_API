import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRamenShop1630291061976 implements MigrationInterface {
    name = 'CreateRamenShop1630291061976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ramenshop" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "location" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_776beac966ad6accc0626c3b7a0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ramenshop"`);
    }

}
