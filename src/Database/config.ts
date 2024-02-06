import { Sequelize } from "sequelize";


// Option 3: Passing parameters separately (other dialects)
export default new Sequelize('appCRUD', 'root', '', {
    host: 'localhost',
    port: 3306,
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


