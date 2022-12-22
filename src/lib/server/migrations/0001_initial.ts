import type { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable('user')
        .addColumn('id', 'integer', (col) => col.autoIncrement().primaryKey())
        .addColumn('username', 'varchar(255)', (col) => col.notNull().unique())
        .execute();
}
  
export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable('user').execute();
}