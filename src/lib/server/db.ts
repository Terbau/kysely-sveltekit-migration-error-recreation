import { FileMigrationProvider, Kysely, Migrator, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { promises as fs } from 'fs';
import * as path from 'path';


interface UserTable {
    id: number;
    username: string;
}


interface Database {
    user: UserTable;
}


export const db = new Kysely<Database>({
    dialect: new PostgresDialect({
        pool: new Pool({
            host: 'localhost',
            port: 5436,
            database: 'test',
            user: 'postgres',
            password: 'postgres',
        }),
    }),
});
console.log("Connected to db");


(async () => {
    const migrator = new Migrator({
        db,
        provider: new FileMigrationProvider({
            fs,
            path,
            migrationFolder: new URL('./migrations', import.meta.url).pathname,
        })
    });

    const { error, results } = await migrator.migrateToLatest()

    results?.forEach((it) => {
        if (it.status === 'Success') {
        console.log(`migration "${it.migrationName}" was executed successfully`)
        } else if (it.status === 'Error') {
        console.error(`failed to execute migration "${it.migrationName}"`)
        }
    })

    if (error) {
        console.error('failed to migrate')
        console.error(error)
        process.exit(1)
    }
})();
