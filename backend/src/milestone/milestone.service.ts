import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Milestone } from './milestone.entity';
import { Repository } from 'typeorm';
import { UpdateMilestoneDto } from './dtos/update-milestone-dto';
import { CreateMilestoneDto } from './dtos/create-milestone-dto';
import { UserService } from 'src/user/user.service';
import { Project } from 'src/project/project.entity';
import { ProjectRole } from 'src/project-user/projectUser.entity';

//TODO: DONT FORGET TO WRAP THE ODERINGINDEX UPDATES IN TRANSACTIONS FOR CONSISTENCY
@Injectable()
export class MilestoneService {
    constructor(
        @InjectRepository(Milestone)
        private milestoneRepo: Repository<Milestone>,
        private userService: UserService,
        @InjectRepository(Project) private projectRepo: Repository<Project>,
    ) {}

    async createMilestone(milestone: CreateMilestoneDto) {
        const project = await this.projectRepo.findOne({
            where: { projectId: milestone.projectId },
            relations: ['projectUsers', 'projectUsers.user'],
        });

        if (!project) {
            throw new NotFoundException('Project not found');
        }

        const projectUser = project.projectUsers.find(
            (pu) => pu.user.userId === milestone.userId,
        );

        if (!projectUser) {
            throw new ForbiddenException('User is not a project Member');
        }

        if (
            projectUser.role !== ProjectRole.OWNER &&
            projectUser.role !== ProjectRole.ADMIN
        ) {
            throw new ForbiddenException(
                'Insufficient permissions to create a milestone',
            );
        }
        const { userId, ...milestoneDetails } = milestone;
        const newMilestone = this.milestoneRepo.create({
            ...milestoneDetails,
            project,
        });

        return await this.milestoneRepo.save(newMilestone);
    }

    async updateMilestone(milestone: UpdateMilestoneDto, milestoneId: number) {
        const oldMilestone = await this.milestoneRepo.findOne({
            where: {
                milestoneId: milestoneId,
            },
            relations: [
                'project',
                'project.projectUsers',
                'project.projectUsers.user',
            ],
        });

        if (!oldMilestone) {
            throw new NotFoundException('Milestone not Found');
        }

        const user = await this.userService.getUserById(milestone.userId);

        const projectUser = oldMilestone.project.projectUsers.find(
            (pu) => pu.user.userId === user.userId,
        );

        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of this project',
            );
        }

        if (
            projectUser.role !== ProjectRole.ADMIN &&
            projectUser.role !== ProjectRole.OWNER
        ) {
            throw new ForbiddenException(
                'Insufficient permissions for updating milestones',
            );
        }

        const { userId, ...milestoneDetails } = milestone;
        Object.assign(oldMilestone, milestoneDetails);

        const updatedMilestone = await this.milestoneRepo.save(oldMilestone);
        return updatedMilestone;
    }

    async getMilestoneById(userId: number, milestoneId: number) {
        const milestone = await this.milestoneRepo.findOne({
            where: { milestoneId: milestoneId },
            relations: [
                'project',
                'project.projectUsers',
                'project.projectUsers.user',
            ],
        });

        if (!milestone) {
            throw new NotFoundException('Milestone Not Found');
        }

        const projectUser = milestone.project.projectUsers.find(
            (pu) => pu.user.userId === userId,
        );

        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of this project',
            );
        }
    }

    async getAllMilestones(userId: number, projectId: number) {
        const project = await this.projectRepo.findOne({
            where: { projectId },
            relations: ['projectUsers', 'projectUsers.user'],
        });

        if (!project) {
            throw new NotFoundException('Project Not Found');
        }

        const projectUser = project.projectUsers.find(
            (pu) => pu.user.userId === userId,
        );

        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of this project',
            );
        }
        //TODO: possible optimisation by not calling the database again instead load the milsestones straight form the project repo call
        return await this.milestoneRepo.find({
            where: { project: { projectId } },
            order: { orderIndex: 'ASC' },
        });
    }

    async deleteMilestone(milestoneId: number, userId: number) {
        const milestone = await this.milestoneRepo.findOne({
            where: { milestoneId },
            relations: [
                'project',
                'project.projectUsers',
                'project.projectUsers.user',
            ],
        });

        if (!milestone) {
            throw new NotFoundException('Milestone not Found');
        }

        const projectUser = milestone.project.projectUsers.find(
            (pu) => pu.user.userId === userId,
        );

        if (!projectUser) {
            throw new ForbiddenException(
                'User is not a member of this project',
            );
        }

        if (
            projectUser.role !== ProjectRole.ADMIN &&
            projectUser.role !== ProjectRole.OWNER
        ) {
            throw new ForbiddenException(
                'Insufficient permission to delete the Milestone',
            );
        }

        await this.milestoneRepo.remove(milestone);
    }
}
