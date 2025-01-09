import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {} from './dtos/create-task-dto';

import { UserService } from 'src/user/user.service';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task) private repo: Repository<Task>,
        private userService: UserService,
    ) {}
    async createTask(task) {
        //TODO: lack of type for task might be a problem
        const user = await this.userService.getUserById(task.userId);

        if (task.type === 'CALENDAR') {
            const newTask = this.repo.create({
                title: task.title,
                description: task.description,
                type: task.type,
                startTime: task.startTime,
                endTime: task.endTime,
                user: user,
            });
            return await this.repo.save(newTask);
        } else {
            const newTask = this.repo.create({
                title: task.title,
                description: task.description,
                type: task.type,
                deadline: task.deadline,
                user: user,
            });

            return await this.repo.save(newTask);
        }
    }

    async updateTask(task: Partial<Task>, taskId: number) {
        //TODO:  partial might not have id
        const currentTask = await this.getTaskById(taskId);
        if (task.type !== currentTask.type) {
            throw new BadRequestException(
                `Task type cannot be updated, current type is ${currentTask.type}`,
            );
        }
        const { type, ...newTask } = task;
        Object.assign(currentTask, newTask);

        return await this.repo.save(currentTask);
    }

    async getAlltasks() {
        const tasks = await this.repo.find();
        return tasks;
    }

    async getTaskById(taskId: number) {
        const task = await this.repo.findOneBy({ taskId });
        if (!task) {
            throw new NotFoundException('Task not defined');
        }
        return task;
    }

    async deleteTask(taskId: number) {
        const task = await this.getTaskById(taskId);

        return await this.repo.remove(task);
    }
}
