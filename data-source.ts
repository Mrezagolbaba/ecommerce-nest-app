import { DataSource } from 'typeorm';
import { User } from "./src/app/entities"; // Ensure this path is correct

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'App',
  synchronize: false,
  logging: true,
  entities: [User], // Ensure this is correctly pointing to your entities
  migrations: [__dirname + '/migration/*{.ts,.js}'],
  migrationsTableName: 'App_migrations',
});
