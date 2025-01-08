import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Module({
    controllers: [TasksController],
    providers: [TasksService],
    imports: [UserModule, TypeOrmModule.forFeature([Task])],
    exports: [TypeOrmModule],
})
export class TasksModule {}
