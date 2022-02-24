import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";


const config: MysqlConnectionOptions ={
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123123123',
    database: 'contract',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    migrations:[
        'dist/src/db/migrations/*.js'
    ],
    cli:{
        migrationsDir: 'src/db/migrations'
    },
    logging: true
}

export default config;