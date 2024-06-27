module.exports ={
    type:'postgres',
    host:process.env[''] || 'localhost',
    port:parseInt(process.env[''] || '5432'),
    ussername:process.env[''] || 'postgres',
    password:process.env[''] || 'postgres',
    database:process.env[''] || 'App',
    synchronize:'true',
    logging:'false',
    entities: [__dirname + '/dist/app/**/entities/*.entity{.ts,.js}'],
    migrations: [__dirname + '/dist//migration/*{.ts,.js}'],
    migrationsTableName:'App_migrations',
    cli:{
        entitiesDir:'src/app/**/entities/*.entity{.ts,.js}',
        migrationsDir: 'src/migration'
    },
};