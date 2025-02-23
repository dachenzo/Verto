import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dtos/create-task-dto';

import { UserService } from 'src/user/user.service';
import { Milestone } from 'src/milestone/milestone.entity';
import { ProjectRole } from 'src/project-user/projectUser.entity';
import { UpdateTaskDto } from './dtos/update-task-dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task) private taskRepo: Repository<Task>,
        private userService: UserService,
        @InjectRepository(Milestone)
        private milestoneRepo: Repository<Milestone>,
    ) {}
    async createTask(task: CreateTaskDto) {
        const milestone = await this.milestoneRepo.findOne({
            where: { milestoneId: task.milestoneId },
            relations: [
                'project',
                'project.projectUsers',
                'project.projectUsers.user',
            ],
        });

        if (!milestone) {
            throw new NotFoundException('Milestone not found');
        }

        const projectUser = milestone.project.projectUsers.find(
            (pu) => pu.user.userId === task.userId,
        );

        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of this project',
            );
        }

        const { userId, ...taskDetails } = task;
        const newTask = this.taskRepo.create({
            ...taskDetails,
            milestone,
            project: milestone.project,
        });

        return await this.taskRepo.save(newTask);
    }

    async getTaskById(taskId: number, userId: number) {
        const task = await this.taskRepo.findOne({
            where: { taskId },
            relations: [
                'milestone',
                'milestone.project',
                'milestone.project.projectUsers',
                'milestone.project.projectUsers.user',
            ],
        });

        if (!task) {
            throw new NotFoundException('Task not found');
        }

        const projectUser = task.milestone.project.projectUsers.find(
            (pu) => pu.user.userId === userId,
        );

        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of this project',
            );
        }

        return task;
    }

    async getTasksByProjects(projectId: number, userId: number) {
        const tasks = await this.taskRepo
            .createQueryBuilder('task')
            .innerJoinAndSelect('task.milestone', 'milestone')
            .innerJoinAndSelect('milestone.project', 'project')
            .innerJoin('project.projectUsers', 'pu')
            .innerJoin('pu.user', 'joinedUser')
            .where('project.projectId = :projectId', { projectId })
            .andWhere('joinedUser.userId = :userId', { userId: userId })
            .getMany();
        return tasks;
    }

    async updateTask(taskId: number, task: UpdateTaskDto) {
        const oldTask = await this.taskRepo.findOne({
            where: { taskId },
            relations: [
                'milestone',
                'milestone.project',
                'milestone.project.projectUsers',
                'milestone.project.projectUsers.user',
            ],
        });

        if (!task) {
            throw new NotFoundException('Task not Found');
        }

        const projectUser = oldTask.milestone.project.projectUsers.find(
            (pu) => pu.user.userId === task.userId,
        );
        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of the project associated with this task',
            );
        }

        const { userId, ...taskDetails } = task;
        Object.assign(oldTask, taskDetails);

        const updatedTask = await this.taskRepo.save(oldTask);

        return updatedTask;
    }

    async getTasksByMilestone() {}

    async deleteTask(taskId: number, userId: number) {
        const task = await this.taskRepo.findOne({
            where: { taskId: taskId },
            relations: [
                'milestone',
                'milestone.project',
                'milestone.project.projectUsers',
                'milestone.project.projectUsers.user',
            ],
        });
        if (!task) {
            throw new NotFoundException('Task not found');
        }
        // Verify the user is a member of the project.
        const projectUser = task.milestone.project.projectUsers.find(
            (pu) => pu.user.userId === userId,
        );
        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of the project associated with this task',
            );
        }
        // Enforce deletion permissions: only OWNER or ADMIN can delete tasks.
        if (
            projectUser.role !== ProjectRole.OWNER &&
            projectUser.role !== ProjectRole.ADMIN
        ) {
            throw new ForbiddenException(
                'Insufficient permissions to delete this task',
            );
        }
        await this.taskRepo.remove(task);
    }
}
