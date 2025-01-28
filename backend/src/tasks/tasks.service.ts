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
    async createTask(task: any) {
        //TODO: lack of type for task might be a problem
        const user = await this.userService.getUserById(task.userId);

        if (task.type === 'CALENDAR') {
            const newTask = this.repo.create({
                title: task.title,
                description: task.description,
                type: task.type,
                startTime: task.startTime,
                endTime: task.endTime,
                priority: task.priority,
                user: user,
            });
            return await this.repo.save(newTask);
        } else {
            const newTask = this.repo.create({
                title: task.title,
                description: task.description,
                type: task.type,
                deadline: task.deadline,
                priority: task.priority,
                user: user,
            });

            return await this.repo.save(newTask);
        }
    }

    //TODO: need to remove the implicit any here
    async updateTask(task: any, taskId: number) {
        //TODO:  partial might not have id
        const currentTask = await this.getTaskById(taskId, task.userId);

        if (task.type !== currentTask.type) {
            throw new BadRequestException(
                `Task type cannot be updated, current type is ${currentTask.type}`,
            );
        }

        if (task.endTime) {
            if (task.endTime < currentTask.startTime) {
                throw new BadRequestException(
                    `End time cannot be earlier than start time`,
                );
            }
        }

        if (task.startTime) {
            if (task.startTime > currentTask.endTime) {
                throw new BadRequestException(
                    `Start time cannot be later than end time`,
                );
            }
        }

        const { type, ...newTask } = task;
        Object.assign(currentTask, newTask);

        return await this.repo.save(currentTask);
    }

    async getAlltasks(userData: { userId: number }) {
        const tasks = await this.repo.find({
            where: {
                user: { userId: userData.userId },
            },
        });
        return tasks;
    }

    async getTaskById(taskId: number, userId: number) {
        const task = await this.repo.findOne({
            where: { taskId: taskId, user: { userId: userId } },
        });
        if (!task) {
            throw new NotFoundException('Task not defined');
        }
        return task;
    }

    async deleteTask(taskId: number, userId: number) {
        const task = await this.getTaskById(taskId, userId);

        return await this.repo.remove(task);
    }
}
