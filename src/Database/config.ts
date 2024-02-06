import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } from "./../environments/env";


// Option 3: Passing parameters separately (other dialects)
export default new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD, {
    host: DB_HOST,
    port: Number(DB_PORT),
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    },
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


