import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'FavouR@2',
            database: 'taskdb',
            autoLoadEntities: true,
            synchronize: true,
        }),
        UserModule,
        TasksModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
