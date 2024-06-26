import { Inject, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    // this is where we will define the database module
    imports: [
        TypeOrmModule.forRootAsync({// defind the database connection
            imports:[],
            inject:[ConfigService],
            useFactory:  (configService: ConfigService) => {
                return {
                    type:'postgres',
                    host: configService.get<string>('DB_HOST'),
                    port: configService.get<number>('DB_PORT'),
                    username: configService.get<string>('DB_USERNAME'),
                    password: configService.get<string>('DB_PASSWORD'),
                    database: configService.get<string>('DB_NAME'),
                    entities: [__dirname + '/../app/**entities/*.entity{.ts,.js}'], // this is where we will define the entities
                    synchronize: true,//this is for development only
                }
            },
        }),
    ],
    providers: [],
    exports: [],
})
export class DatabaseModule {}
