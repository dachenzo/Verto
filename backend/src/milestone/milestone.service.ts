import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Milestone } from './milestone.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from 'src/project/dtos/create-project-dto';

//TODO: DONT FORGET TO WRAP THE ODERINGINDEX UPDATES IN TRANSACTIONS FOR CONSISTENCY
@Injectable()
export class MilestoneService {
    constructor(@InjectRepository(Milestone) repo: Repository<Milestone>) {}

    async getMilestoneById(userId: number, projectId: number) {}

    async createMilestone(milestone: CreateProjectDto) {}
}
