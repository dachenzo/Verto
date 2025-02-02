import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { MilestoneModule } from 'src/milestone/milestone.module';

@Module({
    controllers: [TasksController],
    providers: [TasksService],
    imports: [UserModule, MilestoneModule, TypeOrmModule.forFeature([Task])],
    exports: [TypeOrmModule],
})
export class TasksModule {}
