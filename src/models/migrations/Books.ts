import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Books1708950416085 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
    new Table({
      name: "books",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "title",
          type: "varchar",
          length: "150",
          isNullable: false,
        },
        {
          name: "genre",
          type: "varchar",
          length: "150",
          isNullable: false,
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
          isNullable: false,
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: "now()",
          onUpdate: "now()",
          isNullable: false,
        },
        {
          name: "author_id",
          type: "int",
        },
      ],
      foreignKeys: [
        {
          columnNames: ["author_id"],
          referencedTableName: "authors",
          referencedColumnNames: ["id"],
          onDelete: "CASCADE",
        },
      ],
    }),
      true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("books")
  }
}
