import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectUser } from './projectUser.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { CreateProjectUserDto } from './dtos/create-project-dto';
import { ProjectService } from 'src/project/project.service';

@Injectable()
export class ProjectUserService {
    constructor(
        @InjectRepository(ProjectUser)
        private projectUserRepo: Repository<ProjectUser>,
        private userService: UserService,
        private projectService: ProjectService,
    ) {}

    async createProjectUser(projectUser: CreateProjectUserDto) {
        const user = await this.userService.getUserById(projectUser.userId);
        const project = await this.projectService.getProjectByid(
            projectUser.projectId,
            projectUser.projectId,
        );

        const newProjectUser = this.projectUserRepo.create({
            user,
            project,
            role: projectUser.projectRole,
        });
    }
}
