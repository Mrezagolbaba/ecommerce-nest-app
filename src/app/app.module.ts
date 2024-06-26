import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { RepositoryModule } from './repositories/repository.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './utils';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: envSchema
        }),
        ProductModule,
        UserModule, 
        CategoryModule, 
        RepositoryModule
    ],
})
export class AppModule { }
