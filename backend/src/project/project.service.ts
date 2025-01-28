import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dtos/create-project-dto';
import { UserService } from 'src/user/user.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project) private repo: Repository<Project>,
        private userService: UserService,
    ) {}

    async createProject(project: any) {
        const user = await this.userService.getUserById(project.userId);

        const newProject = this.repo.create({
            title: project.title,
            description: project.description,
            priority: project.priority,
            dueDate: project.dueDate,
        });

        return await this.repo.save(newProject);
    }

    async updateProject(project: any) {
        const currentProject = await this.getProjectByid(
            project.projectId,
            project.userId,
        );
        const { userId, newProject } = project;
        Object.assign(currentProject, newProject);
        return await this.repo.save(currentProject);
    }

    async getAllProjects(userData: { userId: number }) {
        const projects = await this.repo.find({
            where: {
                user: { userId: userData.userId },
            },
        });

        return projects;
    }

    async getProjectByid(projectId: number, userId: number) {
        const project = await this.repo.findOne({
            where: { projectId: projectId, user: { userId: userId } },
        });

        if (!project) {
            throw new NotFoundException('Project not found');
        }

        return project;
    }

    async deleteProject(projectId: number, userId: number) {
        const project = await this.getProjectByid(projectId, userId);

        return await this.repo.remove(project);
    }
}
