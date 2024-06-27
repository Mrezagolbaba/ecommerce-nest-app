import { Module } from '@nestjs/common';
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
                    host: configService.get<string>('POSTGRES_HOST'),
                    port: configService.get<number>('POSTGRES_PORT'),
                    username: configService.get<string>('POSTGRES_USERNAME'),
                    password: configService.get<string>('POSTGRES_PASSWORD'),
                    database: configService.get<string>('POSTGRES_DB'),
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
