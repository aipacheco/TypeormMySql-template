import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm"

export class Favorites1708958513811 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "favorites",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
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
            name: "book_id",
            type: "int",
          },
          {
            name: "user_id",
            type: "int",
          },
        ],

        foreignKeys: [
          {
            columnNames: ["book_id"],
            referencedTableName: "books",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
          {
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
        ],
        uniques: [
          new TableUnique({
            name: "user_book_unique",
            columnNames: ["user_id", "book_id"],
          }),
        ],
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("favorites")
  }
}
