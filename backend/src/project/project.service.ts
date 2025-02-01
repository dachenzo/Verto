import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { ProjectRole, ProjectUser } from './projectuser.entity';
import { CreateProjectDto } from './dtos/create-project-dto';
import { UpdateProjectDto } from './dtos/update-project-dto';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project) private projectRepo: Repository<Project>,
        @InjectRepository(ProjectUser)
        private projectUserRepo: Repository<ProjectUser>,
        private userService: UserService,
    ) {}

    async createProject(project: CreateProjectDto) {
        const user = await this.userService.getUserById(project.userId);

        const newProject = this.projectRepo.create({
            title: project.title,
            description: project.description,
            priority: project.priority,
            dueDate: project.dueDate,
        });

        const savedProject = await this.projectRepo.save(newProject);

        const projectUser = this.projectUserRepo.create({
            project: savedProject,
            user: user,
            role: ProjectRole.OWNER,
        });

        await this.projectUserRepo.save(projectUser);

        return savedProject;
    }

    async updateProject(projectUpdate: UpdateProjectDto, projectId: number) {
        const oldProject = await this.projectRepo.findOne({
            where: {
                projectId: projectId,
            },
            relations: ['projectUsers', 'projectUsers.user'],
        });

        if (!oldProject) {
            throw new NotFoundException('Project not found');
        }

        const projectUser = oldProject.projectUsers.find(
            (pu) => pu.user.userId === projectUpdate.userId,
        );

        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of this Project',
            );
        }

        if (
            projectUser.role !== ProjectRole.ADMIN &&
            projectUser.role !== ProjectRole.OWNER
        ) {
            throw new ForbiddenException(
                'Insufficient permisions to update Project',
            );
        }

        const { userId, ...projectDetails } = projectUpdate;
        Object.assign(oldProject, projectDetails);

        const updatedProject = await this.projectRepo.save(oldProject);
        return updatedProject;
    }

    async getAllProjects(userData: { userId: number }) {
        const user = await this.userService.getUserById(userData.userId);

        const projects = await this.projectRepo
            .createQueryBuilder('project')
            .innerJoin('project.projectUsers', 'pu')
            .where('pu.userId = :userId', { userId: user.userId })
            .getMany();

        return projects;
    }

    async getProjectByid(projectId: number, userId: number) {
        const project = await this.projectRepo.findOne({
            where: { projectId },
            relations: ['projectUsers', 'projectUsers.user'],
        });

        if (!project) {
            throw new NotFoundException('Project not Found');
        }

        const projectUser = project.projectUsers.find(
            (pu) => pu.user.userId === userId,
        );

        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of this Project',
            );
        }

        return project;
    }

    async deleteProject(projectId: number, userId: number) {
        const project = await this.projectRepo.findOne({
            where: { projectId },
            relations: ['projectUsers', 'projectUsers.user'],
        });

        if (!project) {
            throw new NotFoundException('Project not found');
        }

        const projectUser = project.projectUsers.find(
            (pu) => pu.user.userId === userId,
        );

        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of this Project',
            );
        }

        if (projectUser.role !== ProjectRole.OWNER) {
            throw new ForbiddenException(
                'Only the project owner can delete projects',
            );
        }

        await this.projectRepo.remove(project);
    }
}
