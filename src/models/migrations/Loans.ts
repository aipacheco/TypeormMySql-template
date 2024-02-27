import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Loans1708959226863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "loans",
            columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
              },
              {
                name: "loan_date",
                type: "timestamp",
                default: "now()",
                isNullable: false,
              },
              {
                name: "due_date",
                type: "timestamp",
                default: "now() + interval '5 days'",
              },
              {
                name: "return_date",
                type: "timestamp",
                default: "now()",
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
        await queryRunner.dropTable("loans")
      }

}
